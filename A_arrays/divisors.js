let divisors = function(num) {
    let lcd = [];
    for (let i = 0; i <= num; i++) {
        if(num % i === 0){
            lcd.push(i);
        }
    }
    return lcd;
}

console.log(divisors(15));
console.log(divisors(7));
console.log(divisors(24));