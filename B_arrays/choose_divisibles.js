let chooseDivisibles = function(numbers, target) {
    let divNum = [];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % target === 0) {
            divNum.push(numbers[i]);
            // console.log(numbers[i]);
        }
        // console.log(numbers[i]);
    }
    return divNum;
}

console.log(chooseDivisibles([40, 7, 22, 20, 24], 4)); // [40, 20, 24]
console.log(chooseDivisibles([9, 33, 8, 17], 3)); // [9, 33]
console.log(chooseDivisibles([4, 25, 1000], 10)); // [1000]