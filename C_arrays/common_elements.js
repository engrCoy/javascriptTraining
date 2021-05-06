let commonElements = function(arr1,arr2) {
    let common = [];
    for(let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                common.push(arr1[i]);
            }
        }
    }
    return common;
}

let arra1 = ["a", "c", "d", "b"];
let arra2 = ["b", "a", "y"];
console.log(commonElements(arra1, arra2)); // ['a', 'b']

let arra3 = [4, 7];
let arra4 = [32, 7, 1, 4];
console.log(commonElements(arra3, arra4)); // [4, 7]