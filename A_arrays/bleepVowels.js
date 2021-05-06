let bleepVowels = function(str) {
    let bleep = '';
    for (let i = 0; i <str.length; i++) {
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            bleep += '*';
        } else {
            bleep += str[i];
        }
    }
    return bleep;
}

console.log(bleepVowels("skateboard"));
console.log(bleepVowels("slipper"));
console.log(bleepVowels("range"));
console.log(bleepVowels("brisk morning"));

