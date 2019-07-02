import { combineReducers } from "C:/Users/stanislav/AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux";
import { inputsRedicer } from "./inputsReducer";
import { checkboxesReducer } from "./checkboxesReducer";
import { rangeReducer } from "./rangeReducer";
import { textareaReducer } from "./textareaReducer";
import { radioButtonsReducer } from "./radioButtonsReducer";

export const rootReducer = combineReducers({
  inputs: inputsRedicer,
  checkboxes: checkboxesReducer,
  range: rangeReducer,
  textFiled: textareaReducer,
  radioButtons: radioButtonsReducer
})