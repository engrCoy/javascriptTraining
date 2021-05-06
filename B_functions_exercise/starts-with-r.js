// let startsWithR = function(str) {
//     let first = str[0].toUpperCase();
//     return first === 'R';
// }

let startsWithR = function(str) {
    return str[0] === 'r' || str [0] === 'R';
}

console.log(startsWithR("roger that"));
console.log(startsWithR("Row, row, row your boat"));
console.log(startsWithR("slip"));
console.log(startsWithR("TaxiCab"));