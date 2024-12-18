// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const isProduction = process.env.NODE_ENV == "production";

const config = {
  output: {
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  devServer: {
    open: true,
    host: "localhost",
    port: 4242,
    static: path.join(__dirname, "build"),
    watchFiles: {
      paths: ["src/**/*.*"],
      options: {
        usePolling: true,
      },
    },
  },
  plugins: [
    new HtmlBundlerPlugin({
      entry: "src/",
      js: {
        filename: "assets/js/[name].[contenthash:8].js",
      },
      css: {
        filename: "assets/css/[name].[contenthash:8].css",
      },
    }),
    new CopyPlugin({
      patterns: [
          { from: "src/public", to: "assets/public" } //to the dist root directory
      ],
  })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: HtmlBundlerPlugin.loader, // HTML loader
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ["css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.(svg|png|jpg|gif|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name].[hash:8][ext]",
        },
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
