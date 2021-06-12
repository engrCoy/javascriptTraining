let productUpTo = function(max) {
    let prod = 1;
    for(let i = 1; i <= max; i++) {
        prod *= i
    }
    return prod;
}

console.log(productUpTo(4));
console.log(productUpTo(5));
console.log(productUpTo(7));