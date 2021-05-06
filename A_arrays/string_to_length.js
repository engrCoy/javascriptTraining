let stringsToLengths = function(strings) {
    let strToNum = [];
    for(let i = 0; i < strings.length; i++) {
        strToNum.push(strings[i].length);
    }
    return strToNum;
}

console.log(stringsToLengths(["belly", "echo", "irony", "pickled"]));
console.log(stringsToLengths(["on", "off", "handmade"]));