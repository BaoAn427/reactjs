module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    filename: './bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
