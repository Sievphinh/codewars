function add(num1, num2) {
    var sumStr = ''
    while(num1 || num2) {
        sumStr = num1%10 +num2%10 + sumStr
        num1 = Math.floor(num1/10)
        num2 = Math.floor(num2/10)
    }
    return sumStr
}
console.log(add(120, 12))
