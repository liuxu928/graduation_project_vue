const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "http://127.0.0.1:3000",
  //       changeOrigin: true, // 是否跨域
  //       pathRewrite: {
  //         "^/api": "",
  //       },
  //     },
  //   },
  // },
  configureWebpack: {
    resolve: {
      alias: { "@": path.resolve(__dirname, "./src") },
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});
