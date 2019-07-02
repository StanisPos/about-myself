import { OBJECT_RADIOBUTTON_CHANGED } from "../constants/actionTypes";

const initialState = {
  radioButtons: {
    name: '',
    birthDate: '',
    location: '',
    skype: '',
    email: ''
  }
};

export const radioButtonsReducer = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case OBJECT_RADIOBUTTON_CHANGED:
        return {
          ...state,
          radioButtons: {}
        }
      default:
        return state
    }
  }
};