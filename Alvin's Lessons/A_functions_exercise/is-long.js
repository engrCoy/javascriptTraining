let isLong = function(str) {
    let long = str.length > 5;
    return long;
}


console.log(isLong("pie"));
console.log(isLong("kite"));
console.log(isLong("kitty"));
console.log(isLong("telescope"));
console.log(isLong("thermometer"));
console.log(isLong("restaurant"));