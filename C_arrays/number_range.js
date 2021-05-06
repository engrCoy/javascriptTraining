let numberRange = function(min,max,step) {
    let range = []
    for(let i = min; i <= max; i+=step) {
        range.push(i);
    }

    return range;
}

console.log(numberRange(10, 40, 5)); // [10, 15, 20, 25, 30, 35, 40]
console.log(numberRange(14, 24, 3)); // [14, 17, 20, 23]
console.log(numberRange(8, 35, 6)); // [8, 14, 20, 26, 32]
