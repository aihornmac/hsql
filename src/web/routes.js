import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import EndPoint from 'components/EndPoint';
import Query from 'routes/Query';

export default (
  <Router history={browserHistory} key={Math.random()}>
    <Route component={EndPoint}>
      <Route path="/" component={Query} />
    </Route>
  </Router>
);
