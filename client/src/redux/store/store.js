import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import monitorReducersEnhancer from './monitorReducer';
import loggerMiddleware from './logger';
import rootReducer from '../reducer/rootReducer';

export const history = createBrowserHistory();

export default function configureStore(preloadedState = {}) {
  const middlewares = [routerMiddleware(history), loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer(history), preloadedState, composedEnhancers);

  return store;
}
