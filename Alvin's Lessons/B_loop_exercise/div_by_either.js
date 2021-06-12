let divByEither = function(num1, num2, max) {
    for (let i = 1; i < max; i++) {
        if(i % num1 === 0) {
            console.log(i);
        } else if(i % num2 === 0) {
            console.log(i);
        }
    }
}

divByEither(4,3,16);
divByEither(7,5,20);