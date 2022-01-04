// Here is an instruction that we have to follow
// Sort "array" so that all elements with the value of zero are moved to the
// end of the array, while the other elements maintain order.
// [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
// Zero elements also maintain order in which they occurred.
// [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

// Do not use any temporary arrays or objects. Additionally, you're not able
// to use any Array or Object prototype methods such as .shift(), .push(), etc

function removeZeros(arr) {
  let nonZeroArr = [];
  let allZeroArr = [];
  for (el of arr) {
    if (el === 0 || el === "0") {
      allZeroArr[allZeroArr.length] = el;
    } else {
      nonZeroArr[nonZeroArr.length] = el;
    }
  }
  return [...nonZeroArr, ...allZeroArr];
}
