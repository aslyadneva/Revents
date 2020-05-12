import { combineReducers } from "redux";
import { reducer as FormReducer } from 'redux-form'; 
import eventReducer from "../../../features/event/eventReducer";

export default combineReducers({
  form: FormReducer,
  events: eventReducer
})