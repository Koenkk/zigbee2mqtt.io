<script setup lang="ts">
import {onMounted, onUnmounted} from 'vue'

interface GiscusConfig {
    repo: string
    repoId: string
    category: string
    categoryId: string
    mapping: string
    termPrefix: string
    lang: string
}

declare const window: Window & {
    __GISCUS_CONFIG__?: GiscusConfig
}

function getConfig(): GiscusConfig | null {
    const c = window.__GISCUS_CONFIG__
    if (!c || !c.repo || !c.repoId || !c.category || !c.categoryId) return null
    return c
}

function getLang(configLang: string): string {
    const browserLang = navigator.language || ''
    if (configLang && configLang !== 'en') return configLang
    if (browserLang.startsWith('ru')) return 'ru'
    if (browserLang.startsWith('zh')) return 'zh'
    if (browserLang.startsWith('ja')) return 'ja'
    if (browserLang.startsWith('ko')) return 'ko'
    if (browserLang.startsWith('de')) return 'de'
    if (browserLang.startsWith('fr')) return 'fr'
    if (browserLang.startsWith('es')) return 'es'
    if (browserLang.startsWith('pt')) return 'pt'
    if (browserLang.startsWith('uk')) return 'ru'
    return 'en'
}

function getModelFromPath(path: string): string {
    const match = path.match(/\/devices\/([^/]+)\.html/)
    return match ? match[1] : ''
}

let giscusContainer: HTMLDivElement | null = null
let floatingBtn: HTMLButtonElement | null = null
let currentTerm = ''
let scrollHandler: (() => void) | null = null
let messageHandler: ((e: MessageEvent) => void) | null = null

function hideFloatingButton() {
    if (floatingBtn) {
        floatingBtn.style.display = 'none'
    }
}

function removeWidget() {
    if (giscusContainer) {
        giscusContainer.remove()
        giscusContainer = null
    }
    if (floatingBtn) {
        floatingBtn.remove()
        floatingBtn = null
    }
    if (scrollHandler) {
        window.removeEventListener('scroll', scrollHandler, {passive: true})
        scrollHandler = null
    }
    if (messageHandler) {
        window.removeEventListener('message', messageHandler)
        messageHandler = null
    }
    currentTerm = ''
}

function createFloatingButton() {
    if (floatingBtn) return

    floatingBtn = document.createElement('button')
    floatingBtn.type = 'button'
    floatingBtn.className = 'giscus-float-btn'
    floatingBtn.setAttribute('aria-label', 'Jump to discussions')
    floatingBtn.title = 'Discussions'
    floatingBtn.innerHTML = `<div class="giscus-float-icon">💬</div>`

    floatingBtn.addEventListener('click', () => {
        document.getElementById('giscus-comments')?.scrollIntoView({behavior: 'smooth'})
    })

    scrollHandler = () => {
        const target = document.getElementById('giscus-comments')
        if (!target || !floatingBtn) return
        const rect = target.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
            floatingBtn.style.opacity = '0'
            floatingBtn.style.pointerEvents = 'none'
        } else {
            floatingBtn.style.opacity = ''
            floatingBtn.style.pointerEvents = ''
        }
    }

    window.addEventListener('scroll', scrollHandler, {passive: true})
    document.body.appendChild(floatingBtn)
}

function injectWidget() {
    const config = getConfig()
    if (!config) return

    const target = document.querySelector('[vp-content]')
    if (!target) return

    const model = getModelFromPath(window.location.pathname)
    if (!model) return

    const term = `${config.termPrefix}${model}`
    if (term === currentTerm) return

    removeWidget()
    currentTerm = term

    const lang = getLang(config.lang)

    createFloatingButton()

    // Giscus widget
    giscusContainer = document.createElement('div')
    giscusContainer.className = 'giscus-wrapper'
    giscusContainer.id = 'giscus-comments'
    giscusContainer.style.marginTop = '2rem'
    giscusContainer.style.paddingTop = '2rem'
    giscusContainer.style.borderTop = '1px solid var(--c-border)'
    giscusContainer.style.scrollMarginTop = '4rem'

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', config.repo)
    script.setAttribute('data-repo-id', config.repoId)
    script.setAttribute('data-category', config.category)
    script.setAttribute('data-category-id', config.categoryId)
    script.setAttribute('data-mapping', config.mapping || 'specific')
    script.setAttribute('data-term', term)
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'top')
    script.setAttribute('data-theme', 'preferred_color_scheme')
    script.setAttribute('data-lang', lang)
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    script.onerror = () => hideFloatingButton()

    giscusContainer.appendChild(script)
    target.appendChild(giscusContainer)

    // Listen for Giscus error messages from iframe
    messageHandler = (e: MessageEvent) => {
        if (typeof e.data === 'object' && e.data?.giscus?.error) {
            hideFloatingButton()
        }
    }
    window.addEventListener('message', messageHandler)
}

function tryInject() {
    const model = getModelFromPath(window.location.pathname)
    if (!model) {
        removeWidget()
        return
    }
    injectWidget()
}

let retryInterval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
    tryInject()

    const observer = new MutationObserver(() => {
        tryInject()
    })

    observer.observe(document.body, {childList: true, subtree: true})

    retryInterval = setInterval(() => {
        if (currentTerm) {
            if (retryInterval) clearInterval(retryInterval)
            return
        }
        tryInject()
    }, 500)

    onUnmounted(() => {
        observer.disconnect()
        if (retryInterval) clearInterval(retryInterval)
        removeWidget()
    })
})
</script>

<template>
    <div />
</template>
