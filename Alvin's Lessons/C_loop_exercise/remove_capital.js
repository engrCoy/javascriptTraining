let removeCapitals = function(str) {
    let rev = '';
    for (let i = 0; i < str.length; i++) {
        if(str[i] == str[i].toLowerCase()){
            rev += str[i];
        }
        // } else if(str[i] === ' ') {
        //     rev += str[i];
        // }
    }
    return rev;
}

console.log(removeCapitals("fOrEver"));
console.log(removeCapitals("raiNCoat"));
console.log(removeCapitals("cElLAr Door"));

