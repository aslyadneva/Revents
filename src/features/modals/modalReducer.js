import { MODAL_OPEN, MODAL_CLOSE } from "./modalTypes"

const INITIAL_STATE = null

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODAL_OPEN: 
      const {modalType, modalProps} = action.payload
      return {...state, modalType, modalProps};

    case MODAL_CLOSE: 
      return null

    default: 
      return state; 
  }
}