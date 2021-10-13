module.exports = {
  publicPath: '',
  outputDir: '../docs/assets/device-overview',
  filenameHashing: false,
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  devServer: {
    allowedHosts: 'all'
  },
  transpileDependencies: [
    'quasar'
  ]
}
