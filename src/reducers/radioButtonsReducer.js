import { OBJECT_RADIOBUTTON_CHANGED } from "../constants/actionTypes";

const initialState = {
  name: 'plans',
  obj: {
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
          obj: {}
        }
      default:
        return state
    }
  }
};