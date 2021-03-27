const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(param) {
    this.directReverse = param === undefined ? true : param;
    this.lang = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
    message = message.toUpperCase().split("");
    key = key.toUpperCase().split("");
    let encrStr = "";
    let keyKey = 0;

    for (let i = 0; i < message.length; i++) {
      if (!this.lang.includes(message[i])) {
        encrStr += message[i];
        continue;
      }
      encrStr += this.lang[
        (this.lang.indexOf(message[i]) +
          this.lang.indexOf(key[keyKey++ % key.length])) %
          this.lang.length
      ];
    }
    return this.directReverse ? encrStr : encrStr.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error();
    }
    encryptedMessage = encryptedMessage.toUpperCase().split("");
    key = key.toUpperCase().split("");
    let decrStr = "";
    let keyKey = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (!this.lang.includes(encryptedMessage[i])) {
        decrStr += encryptedMessage[i];
        continue;
      }
      decrStr += this.lang[
        (this.lang.indexOf(encryptedMessage[i]) -
          this.lang.indexOf(key[keyKey++ % key.length]) +
          this.lang.length) %
          this.lang.length
      ];
    }
    return this.directReverse ? decrStr : decrStr.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
