let twoSum = function (numbers, target) {
    let state = false;
    for(let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] === target) {
                state = true;
            } 
            // console.log(numbers[i] + numbers[j]);
        }
    }
    return state;
}


console.log(twoSum([2, 3, 5, 9], 7)); // true
console.log(twoSum([2, 3, 5, 9], 4)); // false
console.log(twoSum([6, 3, 4], 10)); // true
console.log(twoSum([6, 5, 1], 10)); // false