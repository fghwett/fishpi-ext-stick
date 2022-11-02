const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
        entry: 'renderer/main.js',
        template: 'public/index.html',
    },
  },
  publicPath: "./",
  chainWebpack: config => {
    config.resolve.alias.set("@", "/renderer");
  }
})
