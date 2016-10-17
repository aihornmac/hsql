const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const projectPath = path.join(__dirname, '..', '..', '..');
const sourcePath = path.join(projectPath, 'src');
const buildPath = path.join(projectPath, 'build');
const webPath = path.join(sourcePath, 'web');

const babelConfig = JSON.parse(
  fs.readFileSync(
    path.join(webPath, '.babelrc')
  )
);
const networkConfig = require('./network');
const accessConfig = require('./access');

const devServer = {
  publicPath: accessConfig.devServer.publicPath,
  host: networkConfig.devHost,
  hot: true,
  historyApiFallback: true,
  compress: true,
  port: networkConfig.devPort,
  stats: {
    colors: true,
    chunkModules: false,
    modules: false
  }
};

module.exports = {
  target: 'web',
  cache: true,
  devtool: 'source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?${accessConfig.devServer.socketPath}`,
      'webpack/hot/dev-server',
      // 'babel-polyfill',
      path.join(webPath, 'client')
    ]
  },
  output: {
    path: buildPath,
    filename: 'bundle.js',
    sourceMapFilename: '[file].map',
    publicPath: accessConfig.publicPath
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: babelConfig,
        include: webPath
      },
      {
        test: /\.s(a|c)ss$/,
        loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=newa_[local]_[hash:base64:5]!postcss!sass',
        include: webPath
      },
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=newa_[local]_[hash:base64:5]!postcss',
        include: webPath,
      }
    ]
  },
  postcss: () => [
    require('autoprefixer'),
    require('css-mqpacker'),
    require('postcss-nested'),
    require('postcss-discard-comments')({
      removeAll: true
    })
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devServer
};
