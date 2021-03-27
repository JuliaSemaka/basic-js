const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let level = 0;
    let maxLevel = 0;
    if (Array.isArray(arr)) {
      maxLevel = 1;
      level = 1;
      arr.forEach((element) => {
        level += this.calculateDepth(element);
        if (level > maxLevel) {
          maxLevel = level;
        }
        level = 1;
      });
    }
    return maxLevel;
  }
};
