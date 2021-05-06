let makeAcronym = function(acro) {
    let accArr = acro.split(' ');
    let first = '';
    for(let i = 0; i < accArr.length; i++) {
        first += accArr[i][0];
    }
    return first.toUpperCase();
}
console.log(makeAcronym("New York")); // NY
console.log(makeAcronym("same stuff different day")); // SSDD
console.log(makeAcronym("Laugh out loud")); // LOL
console.log(makeAcronym("don't over think stuff")); // DOTS
// console.log(makeAcronym("some cake"));

// let makeAcronyms = function(word) {
//     let wordArr = word.split(' ');
//     let acronym = '';
//     for (let i = 0; i < wordArr.length; i++) {
//       //let wordSub = wordArr[i];
//       acronym += wordArr[i][0];
//     }
//     console.log(acronym);
//   }
//   makeAcronyms("some Cake");
//   //console.log(makeAcronyms("some cake"));v