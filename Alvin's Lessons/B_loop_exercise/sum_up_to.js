
let sumUpTo = function(max) {
    var sumUp = 0;
    for(i = 1; i <= max; i++) {
       sumUp += i; 
    }
    return sumUp;
}

console.log(sumUpTo(4));
console.log(sumUpTo(5));
console.log(sumUpTo(2));