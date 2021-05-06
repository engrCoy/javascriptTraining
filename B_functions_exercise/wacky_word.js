let wackyWord = function(str1, str2) {
    let strSub1 = str1.slice(0,3);
    let strSub2 = str2.slice(-2);
    return strSub1 + strSub2;
}

console.log(wackyWord("very","kindly"));
console.log(wackyWord("forever","sick"));
console.log(wackyWord("cellar","door"));
console.log(wackyWord("bagel","sweep"));
