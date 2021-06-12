// for(let i = 0; i <= 5; i++) {
//     console.log(i);
//     console.log('beginning of j');
//     for(let j = 0; j <= 3; j++) {
//         console.log('   ' + j);
//     }
//     console.log('ending of j');
// }


// avoiding repeats
let array = ['red' , 'blue', 'green','orange'];
let count = 0;
for(let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    for(let j = i+1; j < array.length; j++) {
        console.log(array[i] + array[j]);
        // count += 1;
    }
}
// console.log(count);