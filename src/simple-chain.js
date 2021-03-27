const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arrChainMaker: [],
  getLength() {
    return this.arrChainMaker.length;
  },
  addLink(value) {
    value === undefined
      ? this.arrChainMaker.push("")
      : this.arrChainMaker.push(value + "");
    return this;
  },
  removeLink(position) {
    if (!this.arrChainMaker[position]) {
      this.arrChainMaker = [];
      throw new Error();
    }
    this.arrChainMaker.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arrChainMaker.reverse();
    return this;
  },
  finishChain() {
    let str = this.arrChainMaker.join(" )~~( ");
    this.arrChainMaker = [];
    return `( ${str} )`;
  },
};

module.exports = chainMaker;
