const { mode } = require("webpack-nano/argv");
const {
  MiniHtmlWebpackPlugin,
} = require("mini-html-webpack-plugin");
const { WebpackPluginServe } = require("webpack-plugin-serve");

module.exports = {
  watch: mode === "development",
  entry: "./src",
  mode,
  plugins: [
    new MiniHtmlWebpackPlugin({
      context: {
        title: "Webpack demo",
      },
    }),
    new WebpackPluginServe({
      port: process.env.PORT || 8080,
      static: "./dist",
      liveReload: true,
      waitForBuild: true,
    }),
  ],
  watchOptions: {
    // Delay the rebuild after the first change
    aggregateTimeout: 300,

    // Poll using interval (in ms, accepts boolean too)
    poll: 1000,
    // Ignore node_modules to decrease CPU usage
    ignored: /node_modules/,
  }
};