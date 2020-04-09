const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const webpack = require("webpack");
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: "./src/main.js",
  output: {
    //可以解析当前目录
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // publicPath: "dist/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              //Byte limit to inline files as Data URL
              //这也是limit属性的作用，当图片小于8kb时，对图片进行base64编码
              limit: 8192,
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
  plugins: [new VueLoaderPlugin(),
    new webpack.BannerPlugin("版权归Stone Sun所有"),
    new htmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  devServer:{
    contentBase:'./dist',
    inline:true,
  }
};
