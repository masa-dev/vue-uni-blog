const siteConfig = require("./config");

module.exports = {
  publicPath: siteConfig.publicPath,
  pages: {
    index: {
      entry: "src/main.js",
      title: siteConfig.title,
    },
  },
};
