var webpack = require("webpack");
var path = require("path");
var node_modules_dir = path.join(__dirname, 'node_modules');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  watch: true,
  cache: false,
  entry: {
    admin: './src/admin'
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[chunkhash].js"
  },
  externals: {
  },
  module: {
    loaders: [
      { 
        test: require.resolve('jquery'), 
        loader: 'expose?jQuery' 
      },
      { 
        test: /\.coffee$/, 
        loader: "coffee" 
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css")
      },
      { 
        test: /\.scss$/, 
        loader: ExtractTextPlugin.extract("style", "css!sass")
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style", "css!less")
      },
      { 
        test: /\.(png|jpg)$/, 
        loader: 'url?&limit=8192' 
      }, 
      {
        test: /\.(woff|woff2)$/,
        loader: "url?limit=10000&minetype=application/font-woff&name=fonts/[name].[ext]?[hash]"
      },
      {
        test: /\.ttf$/,
        loader: "file?name=fonts/[name].[ext]?[hash]"
      },
      {
        test: /\.eot$/,
        loader: "file?name=fonts/[name].[ext]?[hash]"
      },
      {
        test: /\.svg$/,
        loader: "file?name=fonts/[name].[ext]?[hash]"
      }
    ]
  },
  resolve: {
    extensions: ["", ".coffee", ".js"]
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};

module.exports = config;

