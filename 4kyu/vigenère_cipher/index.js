function VigenèreCipher(key, abc) {
  this.key = key;
  this.abc = abc.split("");
  this.repeatKey = function (str) {
    let repeatedKey = "";
    let i = 0;
    while (repeatedKey.length < str.length) {
      repeatedKey += this.key[i];
      i++;
      if (i > this.key.length) {
        i = 0;
      }
    }
    return repeatedKey;
  };
  this.encode = function (str) {
    let repeatedKey = this.repeatKey(str);
    let encryptedArr = str.split("").map((char, i) => {
      let charIndex = this.abc.indexOf(char);
      let shiftIndex = this.abc.indexOf(repeatedKey[i]);
      if (charIndex === -1) {
        return char;
      }
      if (charIndex + shiftIndex > this.abc.length - 1) {
        let newIndex = charIndex + shiftIndex - this.abc.length;
        return this.abc[newIndex];
      } else {
        let newIndex = charIndex + shiftIndex;
        return this.abc[newIndex];
      }
    });
    return encryptedArr.join("");
  };
  this.decode = function (str) {
    let repeatedKey = this.repeatKey(str);
    let decryptedArr = str.split("").map((char, i) => {
      let charIndex = this.abc.indexOf(char);
      let shiftIndex = this.abc.indexOf(repeatedKey[i]);
      if (charIndex === -1) {
        return char;
      }
      if (charIndex - shiftIndex < 0) {
        let newIndex = charIndex - shiftIndex + this.abc.length;
        return this.abc[newIndex];
      } else {
        let newIndex = charIndex - shiftIndex;
        return this.abc[newIndex];
      }
    });
    return decryptedArr.join("");
  };
}
