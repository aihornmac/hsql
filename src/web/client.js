import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import routes from './routes';

import 'styles/normalize.scss';

const body = document.getElementById('body');

if (module.hot) {
  module.hot.accept();
}

render(
  <AppContainer children={routes} />,
  body
);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const routesHot = require('./routes').default;
    render(
      <AppContainer children={routesHot} />,
      body
    );
  });
}
