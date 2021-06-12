let censorWords = function(str) {
    if (str == 'fuck' || str == 'cunt' || str == 'bitch' || str == 'asshole') {
        let swear = '';
        for (let i = 0; i < str.length; i++) {
            if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' ){
                swear += '*';
            } else {
                swear += str[i];
            }
        }
        return swear;
    } else {
        return str;
    }
}

console.log(censorWords("cunt"));
console.log(censorWords("fuck"));
console.log(censorWords("bitch"));
console.log(censorWords("asshole"));
console.log(censorWords("nice"));