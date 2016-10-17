import koa from 'koa';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './config/webpack';
import { port, host } from './config/network';

const bundle = `${webpackConfig.devServer.publicPath}/${webpackConfig.output.filename}`;

const html = `\
<!doctype html>
<html>
<head>
  <title>HSQL</title>
</head>
<body>
  <div id="body">Downloading Bundle...</div>
  <script src="${bundle}"></script>
</body>
</html>
`;

const createApp = () => {
  const app = new koa();

  app.use(async ctx => {
    ctx.body = html;
  });

  app.listen(port, err => {
    if (err) {
      return console.error(err); // eslint-disable-line
    }
    console.log(`HSQL listening on ${host}:${port}`); // eslint-disable-line
  });
};

const run = () => {
  const compiler = webpack(webpackConfig);

  const devServer = new WebpackDevServer(
    compiler,
    webpackConfig.devServer
  );

  devServer.listen(
    webpackConfig.devServer.port,
    webpackConfig.devServer.host,
    err => {
      if (err) {
        return console.log(err); // eslint-disable-line
      }
      console.log(`HSQL Webpack Dev Server listening on ${webpackConfig.devServer.host}:${webpackConfig.devServer.port}`); // eslint-disable-line

      createApp();
    }
  );
};

run();
