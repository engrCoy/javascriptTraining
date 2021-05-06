// //function definition
// let calculateAverage = function(num1, num2) {
//     let sum= num1 + num2;
//     let finalAvg = sum/2;
//     return finalAvg;
   
// };

// // function call

// console.log(calculateAverage(10,15));


let yellOrWhisp = function(str) {
    //TO DO fucntion
    if (str.length > 4){
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
}
console.log(yellOrWhisp('eXcEllEnt'));
console.log(yellOrWhisp('doG'));