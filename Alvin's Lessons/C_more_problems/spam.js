let spam = function(array){
    let spams = '';
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i][1]; j++) {
            spams += array[i][0] + ' '
        }
        

    }
    return spams;
}

let array1 = [
    ["hi", 3],
    ["bye", 2],
             ];
console.log(spam(array1)); // 'hi hi hi bye bye'
  
let array2 = [
["cat", 1],
["dog", 2],
["bird", 4],
];
console.log(spam(array2)); // 'cat dog dog bird bird bird bird'