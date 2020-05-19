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

// these packages give us bindings to connect our components to firestore 
// we are able to set listeners in these components and listen for changes in data
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import firebase from './app/config/firebase'

const rrFirebaseConfig = {
  userProfile: 'users', 
  attachAuthIsReady: true, // allows us to wait for authentication to be ready before rendering the app
  useFirestoreForProfile: true,  // this stores user date in fireSTORE not fireBASE
  updateProfileOnLogin: false
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(
  reducers, 
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), 
    reactReduxFirebase(firebase, rrFirebaseConfig),
    reduxFirestore(firebase)
  )
) 

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




