let array = [
    ['a','b'],
    ['c','d','e'],
    ['f','g','h','i']
]

let subArray = array[1];
//console.log(array[1][2][3]);

for(let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        console.log(array[i][j]);
    }
}

