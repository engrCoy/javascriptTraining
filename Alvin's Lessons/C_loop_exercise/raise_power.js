let raisePower = function(base, exponent) {
    let exp = 1;
    for (let i = 1; i <= exponent; i++){
        exp *= base;
    }
    return exp;
}

console.log(raisePower(2,5));
console.log(raisePower(4,3));
console.log(raisePower(10,4));
console.log(raisePower(7,2));