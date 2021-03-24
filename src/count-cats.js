const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach((element) => {
    element.forEach((elem) => {
      if (elem === "^^") {
        count++;
      }
    });
  });

  return count;
};
