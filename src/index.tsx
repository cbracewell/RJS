import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppContainer from './Containers/AppContainer';
import routes from './Routes';
import createStore from './Store/createStore';

ReactDOM.render(
  <AppContainer
    store={createStore({})}
    routes={routes}
  />,
  document.getElementById('root')
);
