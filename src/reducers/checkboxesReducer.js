import { OBJECT_CHECKBOX_CHANGED } from "../constants/actionTypes";

const initialState = {
  checkboxes: [
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
          checkboxes: []
        }
      default:
        return state
    }
  }
};