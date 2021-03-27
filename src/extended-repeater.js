const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str !== "string") {
    str = str + "";
  }
  if (options.addition === undefined) {
    options.addition = "";
  }
  if (typeof options.addition !== "string") {
    options.addition = options.addition + "";
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  if (!options.separator) {
    options.separator = "+";
  }
  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }

  let resAddition = "";
  let res = "";
  for (let i = 1; i < options.additionRepeatTimes; i++) {
    resAddition += options.addition + options.additionSeparator;
  }
  resAddition += options.addition;

  for (let i = 1; i < options.repeatTimes; i++) {
    res += str + resAddition + options.separator;
  }
  res += str + resAddition;
  return res;
};
