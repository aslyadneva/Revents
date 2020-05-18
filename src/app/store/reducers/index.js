import { combineReducers } from "redux";
import { reducer as FormReducer } from 'redux-form'; 
import { reducer as ToastrReducer } from 'react-redux-toastr'
import eventReducer from "../../../features/event/eventReducer";
import modalReducer from "../../../features/modals/modalReducer";
import authReducer from "../../../features/auth/authReducer";
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  form: FormReducer,
  toastr: ToastrReducer,
  events: eventReducer, 
  modal: modalReducer, 
  auth: authReducer
})