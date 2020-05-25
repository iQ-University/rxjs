const path = require('path');
module.exports = {
  entry: {
    'drag-example/drag.bundle': __dirname + '/drag-example/drag.js',
    'from-values/values.bundle': __dirname + '/from-values/values.js',
    'operators/operators.bundle': __dirname + '/operators/operators.js',
  },
  devtool: 'source-map',
  mode: 'development',
  output: {
    path: __dirname,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /path.join(__dirname).*\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: '*/*',
    hot: true,
    overlay: true
}
};