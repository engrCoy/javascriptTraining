let twoSumPairs = function(numbers, target) {
    let matrix = [];
    
    for(let i = 0; i < numbers.length; i++) {
        //let test = false;
        for (let j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target){
                matrix.push([numbers[i],numbers[j]])
            }
        }
    }
    return matrix;
}


console.log(twoSumPairs([2, 3, 4, 6, 5], 8)); // [ [2, 6], [3, 5] ]
console.log(twoSumPairs([10, 7, 4, 5, 2], 12)); // [ [10, 2], [7, 5] ]
console.log(twoSumPairs([3, 9, 8], 11)); // [ [3, 8] ]
console.log(twoSumPairs([3, 9, 8], 10)); // [ ]