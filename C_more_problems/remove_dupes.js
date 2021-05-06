let removeDupes = function(array) {
    let uniques = [];
    for (let i = 0; i < array.length; i++) {
        if(!(uniques.includes(array[i]))) {
            uniques.push(array[i]);
        }

    }


    return uniques;
}

console.log(removeDupes(["x", "y", "y", "x", "z"])); // ['x', 'y', 'z']
console.log(removeDupes([false, false, true, false])); // [false, true]
console.log(removeDupes([42, 5, 7, 42, 7, 3, 7, 7])); // [42, 5, 7, 3]

// let sample = [1]
// sample.push(2);
// console.log(sample);