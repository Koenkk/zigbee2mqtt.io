import {imageBaseDir} from '../docgen/constants';
import {promises as fs} from 'fs';
import * as path from 'path';
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

const SOURCE_DIR = imageBaseDir;
const OUTPUT_DIR = imageBaseDir;
const LOG_FILE = path.resolve(__dirname, 'optimization-log.txt');
const TEST_COUNT = 0;
const MAX_CONCURRENT = 32;

const IMAGEMIN_PLUGINS = [imageminMozjpeg({quality: 80, progressive: true}), imageminPngquant({quality: [0.6, 0.8], strip: true})];

interface OptimizationResult {
    filename: string;
    originalSize: number;
    optimizedSize: number;
    savings: number;
    reduction: number;
}

async function ensureDir(dir: string): Promise<void> {
    try {
        await fs.access(dir);
    } catch {
        await fs.mkdir(dir, {recursive: true});
    }
}

async function getImageFiles(dir: string, count: number = TEST_COUNT): Promise<string[]> {
    const files = await fs.readdir(dir);
    const imageFiles = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file));
    return count > 0 ? imageFiles.slice(0, count) : imageFiles;
}

async function getFileSize(filePath: string): Promise<number> {
    const stats = await fs.stat(filePath);
    return stats.size;
}

function formatBytes(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toFixed(1) + ' ' + sizes[i];
}

async function logResult(result: OptimizationResult, counter?: string): Promise<void> {
    const timestamp = new Date().toISOString();
    const savingsDisplay = result.savings > 0 ? formatBytes(result.savings) : `-${formatBytes(Math.abs(result.savings))}`;

    const counterStr = counter ? `[${counter}] ` : '';
    const logEntry = `${timestamp} | ${counterStr}${result.filename.padEnd(30)} | ${formatBytes(result.originalSize).padEnd(10)} | ${formatBytes(result.optimizedSize).padEnd(10)} | ${savingsDisplay.padEnd(12)} | ${result.reduction.toFixed(1)}%\n`;

    try {
        await fs.appendFile(LOG_FILE, logEntry);
    } catch (error) {
        const header = `Timestamp            | Progress/Filename               | Original   | Optimized  | Savings      | Reduction\n`;
        const separator = `${'='.repeat(115)}\n`;
        await fs.writeFile(LOG_FILE, header + separator + logEntry);
    }
}

interface ProcessingResult {
    result: OptimizationResult | null;
    logMessage: string;
    index: number;
}

async function optimizeSingleImage(
    inputDir: string,
    outputDir: string,
    file: string,
    index: number,
    totalFiles: number,
    tempDir: string,
): Promise<ProcessingResult> {
    const inputPath = path.join(inputDir, file);

    try {
        const originalSize = await getFileSize(inputPath);

        const optimizedFiles = await imagemin([inputPath], {
            destination: tempDir,
            plugins: IMAGEMIN_PLUGINS,
        });

        if (optimizedFiles.length > 0) {
            const tempOptimizedPath = path.join(tempDir, file);
            const optimizedSize = await getFileSize(tempOptimizedPath);
            const savings = originalSize - optimizedSize;
            const reduction = (savings / originalSize) * 100;

            const result: OptimizationResult = {
                filename: file,
                originalSize,
                optimizedSize,
                savings,
                reduction: parseFloat(reduction.toFixed(1)),
            };

            const counter = `${index + 1}/${totalFiles}`;
            await logResult(result, counter);

            if (savings > 0) {
                await fs.copyFile(tempOptimizedPath, path.join(outputDir, file));
                await fs.unlink(tempOptimizedPath);
                const logMessage = `[${counter}] ${file} (${formatBytes(originalSize)}) -> ${formatBytes(optimizedSize)} (saved ${formatBytes(savings)}, ${reduction.toFixed(1)}%)`;
                return {result, logMessage, index};
            } else {
                await fs.unlink(tempOptimizedPath);
                const logMessage = `[${counter}] ${file} (${formatBytes(originalSize)}) -> larger, keeping original`;
                return {result: null, logMessage, index};
            }
        }
    } catch (error: any) {
        const logMessage = `[${index + 1}/${totalFiles}] ${file} -> Error: ${error.message}`;
        return {result: null, logMessage, index};
    }

    return {result: null, logMessage: `[${index + 1}/${totalFiles}] ${file} -> No output`, index};
}

async function optimizeImages(inputDir: string, outputDir: string, files: string[]): Promise<OptimizationResult[]> {
    const totalFiles = files.length;
    console.log(`Optimizing ${totalFiles} images in parallel (max ${MAX_CONCURRENT} concurrent)...\n`);

    const tempDir = path.join(path.dirname(inputDir), 'temp-optimization');
    await ensureDir(tempDir);
    await ensureDir(outputDir);

    const results: OptimizationResult[] = [];

    // Process files in batches to control concurrency
    for (let i = 0; i < files.length; i += MAX_CONCURRENT) {
        const batch = files.slice(i, i + MAX_CONCURRENT);
        const batchPromises = batch.map((file, batchIndex) => optimizeSingleImage(inputDir, outputDir, file, i + batchIndex, totalFiles, tempDir));

        const batchResults = await Promise.all(batchPromises);

        // Sort results by index to maintain order, then log them sequentially
        const sortedResults = batchResults.sort((a, b) => a.index - b.index);

        for (const {result, logMessage} of sortedResults) {
            console.log(logMessage);
            if (result) {
                results.push(result);
            }
        }
    }

    // Clean up temporary directory
    try {
        await fs.rmdir(tempDir);
    } catch {
        // Ignore cleanup errors
    }

    return results;
}

async function optimizeDeviceImages(): Promise<void> {
    console.log('Device image optimization');
    console.log('Using mozjpeg and pngquant for compression\n');

    try {
        const imageFiles = await getImageFiles(SOURCE_DIR, TEST_COUNT);

        if (imageFiles.length === 0) {
            console.log('No image files found.');
            return;
        }

        const results = await optimizeImages(SOURCE_DIR, OUTPUT_DIR, imageFiles);

        if (results.length === 0) {
            console.log('No images were optimized.');
            return;
        }

        const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
        const totalOptimized = results.reduce((sum, r) => sum + r.optimizedSize, 0);
        const totalSavings = totalOriginal - totalOptimized;
        const totalReduction = (totalSavings / totalOriginal) * 100;

        console.log('\nResults:');
        console.log(`Optimized ${results.length} images`);
        console.log(`${formatBytes(totalOriginal)} -> ${formatBytes(totalOptimized)}`);
        console.log(`Saved ${formatBytes(totalSavings)} (${totalReduction.toFixed(1)}%)`);

        console.log(`\nOutput: ${OUTPUT_DIR}`);
        console.log(`Log: ${LOG_FILE}`);

        const successful = results.filter((r) => r.savings > 0);
        if (successful.length > 0) {
            const avgReduction = successful.reduce((sum, r) => sum + r.reduction, 0) / successful.length;
            console.log(`Average reduction: ${avgReduction.toFixed(1)}%`);

            const top5 = [...successful].sort((a, b) => b.savings - a.savings).slice(0, 5);

            console.log('\nTop savings:');
            top5.forEach((result, i) => {
                console.log(`${i + 1}. ${result.filename}: ${formatBytes(result.savings)} (${result.reduction.toFixed(1)}%)`);
            });
        }
    } catch (error: any) {
        console.error('Error:', error.message);
    }
}

if (require.main === module) {
    optimizeDeviceImages();
}

export {optimizeDeviceImages};
