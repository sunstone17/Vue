const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    //可以解析当前目录
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
