// let fruits = ['apple','mango','kiwi','grapes'];
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[0]);


// let stuff = [true, 42, 'dog'];
// console.log(stuff);
// stuff.push('cat');
// console.log(stuff);
// stuff.push('NY');
// console.log(stuff);

// let alphabet = ['a', 'b', 'c', 'd', 'e'];
// console.log(alphabet.indexOf('a'));
// console.log(alphabet.slice(0,3));

// let array = ['art', 'banana', 'crayon', 'dog'];
// let i = 2
// // console.log(array[i]);
// let longWords = [];
// for (let i = 0; i < array.length; i++) {
//     if (array[i].length > 4) {
//         longWords.push(array[i])
//     }
// }
// console.log(longWords);


// let people = ['richard','betty','jj','anne','kwasi'];
// console.log(people.join(' '));

// let sentence = 'I cannot wait for dinner';
// let senArr = sentence.split(' ');
// console.log(senArr);

let smallestNum = function(arr) {
    let smallest = arr[0];
    if (arr.length == 0) {
        console.log("null")
    } else {
        for(let i = 1; i < arr.length; i++) {
            // let num = arr[i];
            if(arr[i] < smallest) {
                smallest = arr[i];
            } 
            
            
        }
        console.log(smallest);
    }
}

smallestNum([5,6,4,3,7]);
smallestNum([17,20]);
smallestNum([]);

