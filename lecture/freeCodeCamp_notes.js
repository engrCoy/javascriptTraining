// check interaction of var and let
// var samp1 = 1;

// function something () {
//     var samp1 = 2;
//     console.log(samp1);
// }
// console.log(samp1)
// something();


// check var and let with changing variables
// var ctr = 0;
// function inc() {
//     for(var i = 0; i < 10; i++) {
//         ctr += i;
        
//     }
//     return ctr;
// }

// console.log("var i is =" + i); // error
// console.log("var ctr total is " + inc());

// let ctr2 = 0;
// function inc2() {
//     for(let j = 0; j < 10; j++) {
//         ctr2 += j;
        
//     }
//     return ctr2;
// }

// console.log("let j is =" + j); // error
// console.log("let ctr2 total is " + inc());


// spread operator function
// let total = 0;
// function numTotal([...number],mul) {
//     for(let i = 0; i < number.length; i++) {
//         total += number[i];
//     }
//     return total*mul;
// }
// console.log(numTotal([5,6,7,8,10,1,3],2));

//try recursion with spread operators

// function countdown(n) {
//     return n < 1 ? [] : [n, ...countdown(n-1)];
// }
// console.log(countdown(10));


//try recursion with spread operator with max, and min
function countdown(max, min) {
     return max <= min ? [min]:[max, ...countdown(max-1, min)];
}

console.log(countdown(10,5));
