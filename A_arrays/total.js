let total = function (array) {
    let arrTot = 0;
    for(let i = 0; i < array.length; i++) {
        arrTot += array[i]
    }
    return arrTot;
}

console.log(total([3,2,8]));
console.log(total([-5,7,4,6]));
console.log(total([7]));
console.log(total([]));