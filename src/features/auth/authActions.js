import { LOGIN_USER, LOGOUT_USER } from "./authTypes"

export const loginUser = creds => {
  console.log(creds)
  return {
    type: LOGIN_USER, 
    payload: creds
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  }
}