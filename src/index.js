import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'; 
import './index.css'; 
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr'; 
import reducers from './app/store/reducers';
import ScrollToTop from './app/layout/ScrollToTop';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk))) 

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <ReduxToastr position='bottom-right' transitionIn='fadeIn' transitionOut='fadeOut'/>
        <App />
      </ScrollToTop>     
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);




