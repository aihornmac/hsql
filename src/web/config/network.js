const { HOST, PORT, DEV_HOST, DEV_PORT } = process.env;

module.exports = {
  host: HOST || 'localhost',
  port: PORT || 33133,
  devHost: DEV_HOST || HOST || 'localhost',
  devPort: DEV_PORT || 33331,
};
