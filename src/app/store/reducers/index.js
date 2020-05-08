import { combineReducers } from "redux";
import eventReducer from "../../../features/event/eventReducer";

export default combineReducers({
  events: eventReducer
})