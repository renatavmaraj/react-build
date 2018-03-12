// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { store, history } from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider } from 'material-ui/styles';
import Routes from './routes';
import theme from './theme';

injectTapEventPlugin();

const rootEl = document.querySelector('#root');
if (!rootEl instanceof Element) {
  throw new Error('Invalid Type');
}

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  rootEl
);
