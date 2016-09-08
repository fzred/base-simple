import path from 'path'

const projectRoot = path.resolve(__dirname, '../')

export default {
  entry: {
    app: path.resolve(projectRoot, './src/main.js'),
  },
  output: {
    path: path.resolve(projectRoot, './dist'),
    filename: '[name].js?[hash:7]',
  },
}
