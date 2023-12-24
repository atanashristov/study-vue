const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      title: "Todo Application",
      entry: "./src/main.js",
    },
    landing: {
      title: "Landing Page for Todos",
      entry: "./src/landing-page.js",
    },
  },
});
