let zipper = function(arra1, arra2) {
    let matrix = [];
    for (let i = 0; i < arra1.length; i++) {
        for(j = 0; j <arra2.length; j++) {
            if (i == j){
                matrix.push([arra1[i],arra2[j]]);
            }
        }
    }
    return matrix;
}


let array1 = ["a", "b", "c", "d"];
let array2 = [-1, -2, -3, -4];
console.log(zipper(array1, array2));
// [
//   ['a', -1],
//   ['b', -2],
//   ['c', -3],
//   ['d', -4],
// ]

let array3 = ["whisper", "talk", "shout"];
let array4 = ["quiet", "normal", "loud"];
console.log(zipper(array3, array4));
// [
//   ['whisper', 'quiet'],
//   ['talk', 'normal'],
//   ['shout', 'loud'],
// ]