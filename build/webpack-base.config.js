import path from 'path'
import autoprefixer from 'autoprefixer'
import precss from 'precss'

const projectRoot = path.resolve(__dirname, '../')

export default {
  entry: {
    app: path.resolve(projectRoot, './src/main.js'),
  },
  output: {
    publicPath: '/',
    path: path.resolve(projectRoot, './dist'),
    filename: '[name].js?[hash:7]',
  },
  module: {
    loaders: [
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=1' },
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  postcss() {
    return [autoprefixer({ browsers: ['android 4', 'iOS 8'] }), precss]
  },
}
