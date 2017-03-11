const path = require('path');

module.exports = {
  entry: './src',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.jsx', '.js', 'json'],
    modules: [
      path.resolve(__dirname, 'src/lib'),
      path.resolve(__dirname, 'node_modules'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { modules: false }]
          ],
          plugins: [
            ['transform-react-jsx', { pragma: 'h' }]
          ]
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    historyApiFallback: true
  }
};
