const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  

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
              { loader: 'css-loader' },
              { loader: 'sass-loader' }
          ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: "all.css"
    }) 
  ]
};