const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "development" ? "" : "/app",
  pages: {
    index: {
      title: "Todo Application " + process.env.NODE_ENV,
      entry: "./src/main.js",
    },
    landing: {
      title: "Landing Page for Todos",
      entry: "./src/landing-page.js",
    },
  },
});
