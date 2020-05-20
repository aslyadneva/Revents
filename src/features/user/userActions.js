import { toastr } from "react-redux-toastr"

export const updateProfile = user => {
  console.log(user)
  return async function (dispatch, getState, {getFirebase}) {
    const firebase = getFirebase()
    const {isEmpty, isLoaded, ...updatedUser} = user
    console.log(updatedUser)

    try {
      await firebase.updateProfile(updatedUser)
      toastr.success('Success', 'Profle is updated')

    } catch (error) {
      console.log(error)
    }

  }
}