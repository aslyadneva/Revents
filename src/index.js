import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';
import './index.css'; 
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './app/store/reducers';
import ScrollToTop from './app/layout/ScrollToTop';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(reducers, composeEnhancers(applyMiddleware())) 

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>     
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);




