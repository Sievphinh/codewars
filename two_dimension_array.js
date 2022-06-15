let twoDArray = [[3],
  [7, 4, 9],
  [2, 4, 6],
  [8, 5, 9, 3]]
console.log(twoDArray.reduce((prev, current) => 
    current.map((l, i) => console.log(l, prev[i]))));
