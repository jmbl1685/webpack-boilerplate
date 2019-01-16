const { resolve } = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: resolve("dist"),
    filename: "bundle.[hash:6].chunk.js"
  },
  devServer: {
    port: 4200,
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      },
      {
        test: /\.(ico|gif|png|jpe?g|woff|eot|ttf|mp4)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash:6].chunk.[ext]"
            }
          },
          {
            loader: "webp-loader?{quality: 50}"
          }
        ]
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {}
        }
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: "./public/index.html",
      minify: {
        collapseWhitespace: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "styles.[hash:6].chunk.css"
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }]
      },
      canPrint: true
    }),
    new CleanWebpackPlugin(["dist"], { verbose: true, dry: false })
  ]
};
