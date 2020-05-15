import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENTS } from "./eventTypes"
import { toastr } from "react-redux-toastr"

export const createEvent = event => {
  return async function (dispatch) {
    try {
      dispatch({ type: CREATE_EVENT, payload: event })
      toastr.success('Success!', 'Event has been created')
    } catch (error) {
      toastr.success('Oops', 'Something went wrong')
    }
  }
}

export const updateEvent = event => {
  return async function (dispatch) {
    try {
      dispatch({ type: UPDATE_EVENT, payload: event })
      toastr.success('Success!', 'Event has been updated')
    } catch (error) {
      toastr.success('Oops', 'Something went wrong')
    }
  }
}

export const deleteEvent = eventId => {
  return {
    type: DELETE_EVENT, 
    payload: eventId
  }
}

// export const loadEvents = () => {
//   return async function (dispatch) {

//     try {
      // dispatch(actionThatStartsLoadingFLag())
      // let events = await eventsAPICall()
      // dispatch({type: FETCH_EVENTS, payload: events})
      // dispatch(actionThatEndsLoadingFLag())
//     } catch (error) {
//       console.log(error)
//       // dispatch(errorActionThatEndsLoadingFLag())
//     }

//   }
  
// }