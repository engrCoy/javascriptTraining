let totalProduct = function(array) {
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        for(j = 0; j < array[i].length; j++) {
            product *= array[i][j];
        }
    }
    return product;
}

let array1 = [
    [3, 5, 2],
    [6, 2],
  ];
  console.log(totalProduct(array1)); // 360
  
  let array2 = [
    [4, 6],
    [2, 3],
    [1, 2],
  ];
  console.log(totalProduct(array2)); // 288