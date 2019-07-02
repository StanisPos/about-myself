import { OBJECT_INPUT_CHANGED } from "../constants/actionTypes";

const initialState = {
  name: "contacts",
  obj: [
    { name: "Посиделов Станислав Сергеевич" },
    { birthDate: "1990" },
    { location: "г. Воронеж, Россия" },
    { skype: "live:stanispos" },
    { email: "stanisPos@gmail.com" }
  ]
};

export const inputsRedicer = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case OBJECT_INPUT_CHANGED:
        return {
          ...state,
          obj: {}
        };
      default:
        return state;
    }
  }
};
