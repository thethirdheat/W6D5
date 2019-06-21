const path = require('path');

module.exports = {
  // determines name and path of the entry file
  entry: "./frontend/entry.jsx",
  output: {
    path: path.resolve(__dirname),
    // determines name and path of the bundle file
    filename: "./dist/bundle.js"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        // determines included/excluded -> filetypes/folders for transpiling
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          // 
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        }
      }
    ]
  },
  // determines filetypes that will be bundle
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};