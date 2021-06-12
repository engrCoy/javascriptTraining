let fizzBuzz = function(max) {
    for(let i = 0; i <= max; i++) {
        if((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            console.log(i);
        }
    }
}

fizzBuzz(18);
console.log('');
fizzBuzz(33);