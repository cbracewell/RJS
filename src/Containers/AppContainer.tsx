import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Layout
import CoreLayout from '../Components/Layouts/CoreLayout';

interface AppContainerProps {
  store: any;
  routes: any;
}

class AppContainer extends React.Component<AppContainerProps, any> {
  shouldComponentUpdate() {
    return false;
  }

  render(): JSX.Element {
    const { store, routes } = this.props;

    return (
      <Provider store={store}>
        <BrowserRouter>
          <CoreLayout>{routes(store)}</CoreLayout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default AppContainer;
