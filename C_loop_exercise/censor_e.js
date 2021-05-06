let censorE = function(str){
    let cenE = '';
    for(let i = 0; i < str.length; i++) {
        if(str[i] === 'e') {
            cenE += '*';
        } else {
            cenE += str[i];
        }
    }
    return cenE;
}

console.log(censorE("speedy"));
console.log(censorE("pending"));
console.log(censorE("scene"));
console.log(censorE("heat"));