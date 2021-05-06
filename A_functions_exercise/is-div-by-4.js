let isDivBy4 = function(num) {
    let divRes = num % 4 === 0;
    return divRes;
}

console.log(isDivBy4(8));
console.log(isDivBy4(12));
console.log(isDivBy4(24));
console.log(isDivBy4(9));
console.log(isDivBy4(10));
