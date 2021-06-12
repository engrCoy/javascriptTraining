// let shortenLongWords = function(str) {
//     let strArr = str.split(' ');
//     let vowel = 'aeiou';
//     let newStr = [];

//     for (let i = 0; i < strArr.length; i++) {
//         if(strArr[i].length <= 4){
//             newStr.push(strArr[i]);
//         } else {
//             let consonant = '';
//             for(let j = 0; j < strArr[i].length; j++) {
//                 if(!vowel.includes(strArr[i][j])){
//                     consonant += strArr[i][j];
//                 }
//                 // console.log(strArr[i][j]);
//             }
//             newStr.push(consonant);
//         }    //console.log(strArr[i]);
//     }
//     return newStr.join(' ');
// }

//or


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

let shortenLongWords = function(str) {
    let strArr = str.split(' ');
    let newStr = [];

    for (let i = 0; i < strArr.length; i++) {
        if(strArr[i].length <= 4){
            newStr.push(strArr[i]);
        } else {
            newStr.push(removeVowels(strArr[i]));
        }    //console.log(strArr[i]);
    }
    return newStr.join(' ');
}






console.log(shortenLongWords("they are very noble people")); // 'they are very nbl ppl'
console.log(shortenLongWords("stick with it")); // 'stck with it'
console.log(shortenLongWords("ballerina, you must have seen her")); // 'bllrna, you must have seen her'