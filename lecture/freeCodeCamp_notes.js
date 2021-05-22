// check interaction of var and let
// var samp1 = 1;

// function something () {
//     var samp1 = 2;
//     console.log(samp1);
// }
// console.log(samp1)
// something();


// check var and let with changing variables
var ctr = 0;
function inc() {
    for(var i = 0; i < 10; i++) {
        ctr += i;
        
    }
    return ctr;
}

// console.log("var i is =" + i); // error
console.log("var ctr total is " + inc());

let ctr2 = 0;
function inc2() {
    for(let j = 0; j < 10; j++) {
        ctr2 += j;
        
    }
    return ctr2;
}

// console.log("let j is =" + j); // error
console.log("let ctr2 total is " + inc());

