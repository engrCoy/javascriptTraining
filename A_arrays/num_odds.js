let numOdds = function(num) {
    let count = [];
    for(let i = 0; i < num.length; i++) {
        if(num[i] % 2 === 1) {
            count.push(num[i]);
        }
    }
    return count.length;
}

console.log(numOdds([4, 7, 2, 5, 9]));
console.log(numOdds([11, 31, 58, 99, 21, 60]));
console.log(numOdds([100, 40, 4]));