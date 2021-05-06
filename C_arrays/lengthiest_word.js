let lengthiestWord = function(sentence) {
    let sentArr = sentence.split(' ');
    let longest = '';
    for(let i = 0; i < sentArr.length; i++) {
        if(sentArr[i].length > longest.length) {
            longest = sentArr[i];
        }
    }
    return longest;
}

console.log(lengthiestWord("I am pretty hungry")); // 'hungry'
console.log(lengthiestWord("we should think outside of the box")); // 'outside'
console.log(lengthiestWord("down the rabbit hole")); // 'rabbit'
console.log(lengthiestWord("simmer down")); // 'simmer'