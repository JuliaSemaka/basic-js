const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || !Array.isArray(members)) {
    return false;
  }
  let newArr = members.filter(function (item) {
    return typeof item === "string";
  });
  let firstLetters = newArr.map(function (item) {
    return item.trim().slice(0, 1).toUpperCase();
  });
  return firstLetters.sort().join("");
};
