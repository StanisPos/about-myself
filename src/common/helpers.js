export const getModifiedKeyInput = key => {
  switch (key) {
    case "name":
      return "Полное ФИО";
    case "birthDate":
      return "Год рождения";
    case "location":
      return "Место жительства";
    case "skype":
      return "Скайп";
    case "email":
      return "Почта";
    default:
      return;
  }
};
