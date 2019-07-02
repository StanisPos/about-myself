import { OBJECT_INPUT_CHANGED } from "../constants/actionTypes";

const initialState = {
  inputObject: {
    name: '',
    birthDate: '',
    location: '',
    skype: '',
    email: ''
  }
};

export const inputsRedicer = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case OBJECT_INPUT_CHANGED:
        return {
          ...state,
          inputObject: {}
        }
      default:
        return state
    }
  }
};