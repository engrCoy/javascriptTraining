let reverseArray = function(array) {
    let reverse = [];
    for (let i = array.length-1; i >= 0; i--) {
        reverse.push(array[i]);
    }
    return reverse;
}

console.log(reverseArray(["zero", "one", "two", "three"])); // ['three', 'two', 'one', 'zero']
console.log(reverseArray([7, 1, 8])); // [8, 1, 7]