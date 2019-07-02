import { OBJECT_CHECKBOX_CHANGED } from "../constants/actionTypes";

const initialState = {
  name: "skills",
  obj: [
    {
      text: "БЭМ/OOCSS",
      isChecked: true
    },
    {
      text: "Pug(Jade)",
      isChecked: true
    },
    {
      text: "Stylus/LESS/SASS",
      isChecked: true
    },
    {
      text: "Работаю с SVG",
      isChecked: true
    },
    {
      text: "Верстаю семантично",
      isChecked: true
    },
    {
      text: "Accessebility (A11Y)",
      isChecked: true
    },
    {
      text: "ES2015/ES2016",
      isChecked: true
    },
    {
      text: "Gulp/GRUNT",
      isChecked: true
    },
    {
      text: "Webpack",
      isChecked: true
    },
    {
      text: "Дружу с WebGL",
      isChecked: false
    },
    {
      text: "jQuery",
      isChecked: false
    },
    {
      text: "Знаю/изучаю Angular",
      isChecked: false
    },
    {
      text: "Знаю/изучаю React",
      isChecked: true
    },
    {
      text: "Знаю/изучаю Node.js",
      isChecked: true
    },
    {
      text: "Использую Git",
      isChecked: true
    },
    {
      text: "С глазомером всё ок",
      isChecked: true
    },
    {
      text: "Читаю blog.csssr.ru",
      isChecked: true
    },
    {
      text: "Я ленивый(-ая)",
      isChecked: false
    },
    {
      text: "У меня хороший английский",
      isChecked: true
    }
  ]
};

export const checkboxesReducer = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case OBJECT_CHECKBOX_CHANGED:
        return {
          ...state,
          obj: []
        };
      default:
        return state;
    }
  }
};
