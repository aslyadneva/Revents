import { LOGIN_USER, LOGOUT_USER } from "./authTypes"
import { closeModal } from "../modals/modalActions"

export const loginUser = creds => {
  
  return function (dispatch) {
    dispatch({ type: LOGIN_USER, payload: creds })
    dispatch(closeModal())
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  }
}