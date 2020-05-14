import { combineReducers } from "redux";
import { reducer as FormReducer } from 'redux-form'; 
import eventReducer from "../../../features/event/eventReducer";
import modalReducer from "../../../features/modals/modalReducer";
import authReducer from "../../../features/auth/authReducer";

export default combineReducers({
  form: FormReducer,
  events: eventReducer, 
  modal: modalReducer, 
  auth: authReducer
})