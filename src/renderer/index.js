/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';

import routes from './routes';
// import './assets/less/reset.less';

const engine = new Styletron();
ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <Router>
        {renderRoutes(routes)}
      </Router>
    </BaseProvider>
  </StyletronProvider>,
  document.querySelector('#app'),
);
