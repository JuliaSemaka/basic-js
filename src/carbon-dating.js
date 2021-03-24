const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== "string") {
    return false;
  }
  let formula =
    Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.log(2) / 5730);
  return formula >= 0 && formula !== Infinity ? Math.ceil(formula) : false;
};
