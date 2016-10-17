const network = require('./network');

module.exports = {
  publicPath: `http://newa.aihorn.com:${network.devPort}/static/`,
  devServer: {
    publicPath: `http://newa.aihorn.com:${network.devPort}/static`,
    socketPath: `http://newa.aihorn.com:${network.devPort}`,
  }
};
