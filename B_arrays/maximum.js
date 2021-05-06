let maximum = function(numbers) {
    if (numbers.length === 0) {
        return null
    } else {
        let max = 0;
        for(let i = 0; i <numbers.length; i++) {
            if(numbers[i] > max) {
                max = numbers[i];
            }
        }
        return max;
    }
}

console.log(maximum([5, 6, 3, 7])); // 7
console.log(maximum([17, 15, 19, 11, 2])); // 19
console.log(maximum([])); // null