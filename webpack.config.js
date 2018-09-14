const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "src/js"),
    filename: "bundle.js",
    publicPath: "/dist"
  },
  module : {
    rules : [
      {
          test: /\.s?[ac]ss$/,
          use: [
              MiniCssExtractPlugin.loader,
              { loader: 'css-loader', options: { url: false, sourceMap: true } },
              { loader: 'sass-loader', options: { sourceMap: true } }
          ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: "all.css"
    }) 
  ],
  mode : devMode ? 'development' : 'production'
};