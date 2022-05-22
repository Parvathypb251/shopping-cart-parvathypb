import React,{ Suspense }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from './redux/store/store';


const AppWrapper = () => {
  const initStore = configureStore();
  return (
    <Provider store={initStore}>
      <ConnectedRouter history={history}>
        <Suspense fallback={<p>loading...</p>}>
          <App />
        </Suspense>
      </ConnectedRouter>
    </Provider>
  );
};

const bootstrapApplication = () => {
  ReactDOM.render(<AppWrapper />, document.getElementById('root'));
};

bootstrapApplication();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
