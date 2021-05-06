let funnySound = function(str1, str2) {
    let strSub1 = str1.slice(0,3);
    let strSub2 = str2.slice(0,3);
    return strSub1+strSub2;
}

console.log(funnySound("tiger","spoon"));
console.log(funnySound("computer","phone"));
console.log(funnySound("skate","bottle"));
console.log(funnySound("frog","ashtray"));
// console.log("ghost".slice(0,3));