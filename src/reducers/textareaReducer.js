import { OBJECT_TEXTAREA_CHANGED } from "../constants/actionTypes";

const initialState = {
  name: 'text',
  obj: {
    text: ''
  }
};

export const textareaReducer = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case OBJECT_TEXTAREA_CHANGED:
        return {
          ...state,
          obj: {}
        }
      default:
        return state
    }
  }
};