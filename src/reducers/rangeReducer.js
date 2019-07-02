import { OBJECT_RANGE_CHANGED } from "../constants/actionTypes";

const initialState = {
  name: 'knowledge',
  obj: [
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
          obj: []
        }
      default:
        return state
    }
  }
};