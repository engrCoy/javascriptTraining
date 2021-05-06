let contains = function(str1, str2) {
    return str1.toLowerCase().indexOf(str2.toLowerCase()) > -1
}

console.log(contains("caterpillar","pill"));
console.log(contains("lion's share","on"));
console.log(contains("SORRY","or"));
console.log(contains("tangent","gem"));
console.log(contains("clock","ok"));
