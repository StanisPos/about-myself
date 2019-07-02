import { OBJECT_CHECKBOX_CHANGED } from "../constants/actionTypes";

const initialState = {
  name: 'skills',
  obj: [
    {
      text: '',
      isChecked: false
    },
  ]
};

export const checkboxesReducer = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case OBJECT_CHECKBOX_CHANGED:
        return {
          ...state,
          obj: []
        }
      default:
        return state
    }
  }
};