const describe =  require('mocha').describe
const it = require('mocha').it
console.log(describe)

function cost(mins) {
    var price = 30
    mins -= 60
    while(mins>0) {
        price += 10
        mins -= 30
    }
    return price
}

