module.exports = function reverse (n) {
  let numStr = n.toString().split("").reverse().join("");
    return parseInt(numStr, 10);
}
