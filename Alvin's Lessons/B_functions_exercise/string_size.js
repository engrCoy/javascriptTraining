let stringSize = function(str) {
    if (str.length < 5){
        return "small";
    } else if(str.length == 5) {
        return "medium"
    } else if(str.length > 5) {
        return "large"
    }
}


console.log(stringSize("cat"));
console.log(stringSize("bell"));
console.log(stringSize("ready"));
console.log(stringSize("shirt"));
console.log(stringSize("shallow"));
console.log(stringSize("intelligence"));
