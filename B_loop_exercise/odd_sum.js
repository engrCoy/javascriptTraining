let oddSum = function(max) {
    var sum = 0
    for (let i = 0; i <= max; i++) {
        if(i % 2 != 0){
            sum += i;
        }
    }
    return sum;
}

console.log(oddSum(10));
console.log(oddSum(5));