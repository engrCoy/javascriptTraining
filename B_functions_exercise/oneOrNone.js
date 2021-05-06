let oneOrNone = function(bool1,bool2) {
    return (bool1 || bool2) && !(bool1 && bool2);
}

console.log(oneOrNone(false, false));
console.log(oneOrNone(true, false));
console.log(oneOrNone(false, true));
console.log(oneOrNone(true, true));