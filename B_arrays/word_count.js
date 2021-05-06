let wordCount = function(sentence, targetWords) {
    let sentArr = sentence.split(' ');
    let accept = [];
    for(let i = 0; i < sentArr.length; i++) {
        for (let j = 0; j < targetWords.length; j++) {
            if(sentArr[i] === targetWords[j]) {
                accept.push(sentArr[i]);
            }
        }
    }
    return accept.length;
}

console.log(wordCount("open the window please", ["please", "open", "sorry"])); // 2
console.log(wordCount("drive to the cinema", ["the", "driver"])); // 1
console.log(wordCount("can I have that can", ["can", "I"])); // 3