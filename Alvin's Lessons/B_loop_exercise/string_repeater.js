let stringRepeater = function(str, num) {
    let strRpt = '';
    for (let i = 0; i < num; i++){
        strRpt += str;
    }
    return strRpt;
}

console.log(stringRepeater("q",4));
console.log(stringRepeater("go",2));
console.log(stringRepeater("tac",3));