import { OBJECT_RANGE_CHANGED } from "../constants/actionTypes";

const initialState = {
  radioRange: [
    {
      text: '',
      isChecked: false
    },
  ]
};

export const rangeReducer = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case OBJECT_RANGE_CHANGED:
        return {
          ...state,
          radioRange: []
        }
      default:
        return state
    }
  }
};