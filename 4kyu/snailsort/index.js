snail = function (arr) {
  let newArr = arr[0];
  if (arr.lenght === 1) return arr[0];
  return newArr.concat(snail(transposeArr(arr.slice(1))));
};

function transposeArr(arr) {
  return arr[0].map((_, index) => arr.map((row) => row[index])).reverse();
}
