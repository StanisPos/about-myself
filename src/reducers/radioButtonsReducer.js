import { OBJECT_RADIOBUTTON_CHANGED } from "../constants/actionTypes";

const initialState = {
  name: "plans",
  obj: [
    {
      value: "layout",
      text: "Верстать",
      isChecked: true
    },
    {
      value: "programming",
      text: "Прокачиваться в JS",
      isChecked: false
    },
    {
      value: "management",
      text: "Менеджерство",
      isChecked: false
    },
    {
      value: "other",
      text: "Другое",
      isChecked: false
    }
  ]
};

export const radioButtonsReducer = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case OBJECT_RADIOBUTTON_CHANGED:
        return {
          ...state,
          obj: {}
        };
      default:
        return state;
    }
  }
};
