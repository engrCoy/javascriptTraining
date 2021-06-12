let removeFirstVowel = function(word) {
    let wordSub = '';
    var ctr = 0;
    let vowel = 'aeiou';
    for (let i = 0; i < word.length; i++) {
        if ((!vowel.includes(word[i]) && ctr == 0) || ctr == 1) {
            wordSub += word[i]
        } else {
            ctr ++;
        }

    }
    return wordSub;
}

//or

// let removeFirstVowel = function(word) {
//     let vowels = 'aeiou';
//     for (let i = 0; i < word.length; i++) {
//         if(vowels.includes(word[i])) {
//             return word.slice(0,i) + word.slice(i+1);
//         }
//     }
//     return word;
// }

console.log(removeFirstVowel("volcano")); // 'vlcano'
console.log(removeFirstVowel("celery")); // 'clery'
console.log(removeFirstVowel("juice")); // 'jice'
console.log(removeFirstVowel("fly"));