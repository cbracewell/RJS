import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';

// import loader from '../Middleware/Loading.middleware';
// import notifications from '../Middleware/Notifications.middleware';

export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware: any = [
    logger
  ];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers: any = [];

  let composeEnhancers = compose;

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  );

  return store;
};
