let parity = function(num) {
    if(num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

console.log(parity(5));
console.log(parity(7));
console.log(parity(13));
console.log(parity(32));
console.log(parity(10));
console.log(parity(602348));