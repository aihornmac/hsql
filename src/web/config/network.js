const { HOST, PORT, DEV_HOST, DEV_PORT } = process.env;

module.exports = {
  host: HOST || '0.0.0.0',
  port: PORT || 33133,
  devHost: DEV_HOST || HOST || '0.0.0.0',
  devPort: DEV_PORT || 33331,
};
