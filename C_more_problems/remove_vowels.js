// let removeVowels = function(word) {
//     let newWord = '';
//     for(let i = 0; i < word.length; i++) {
//         if(!(word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u')){
//             newWord += word[i];
//         }
//     }
//     return newWord;
// }


let removeVowels = function(word) {
    let newWord = '';
    let excl = 'aeiou'
    for (let i = 0; i < word.length; i++) {
        if(!excl.includes(word[i])) {
            newWord += word[i];
        }

    }
    return newWord;
}

console.log(removeVowels("jello")); // jll
console.log(removeVowels("sensitivity")); // snstvty
console.log(removeVowels("cellar door")); // cllr dr