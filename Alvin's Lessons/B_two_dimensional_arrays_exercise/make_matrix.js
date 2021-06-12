let makeMatrix = function (m,n,value) {
    let mainMatrix = [];
    for (let i = 1; i <= m; i++){
        let inMatrix = [];
        for(let j = 1; j <= n; j++) {
            inMatrix.push(value);
        }
        mainMatrix.push(inMatrix);
    }
    return mainMatrix;
}

console.log(makeMatrix(3, 5, null));
// [
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ]
// ]

console.log(makeMatrix(4, 2, "x"));
// [
//   [ 'x', 'x' ],
//   [ 'x', 'x' ],
//   [ 'x', 'x' ],
//   [ 'x', 'x' ]
// ]

console.log(makeMatrix(2, 2, 0));
// [
//   [ 0, 0 ],
//   [ 0, 0 ]
// ]v