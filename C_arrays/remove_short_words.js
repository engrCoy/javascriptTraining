let removeShortWords = function (sentence) {
    let sentArray = sentence.split(' ');
    let newSent = [];
    for(let i = 0; i < sentArray.length; i++) {
        if(sentArray[i].length >= 4) {
            newSent.push(sentArray[i]);
        }
    }
    return newSent.join(' ');
}

console.log(removeShortWords("knock on the door will you")); // 'knock door will'
console.log(removeShortWords("a terrible plan")); // 'terrible plan'
console.log(removeShortWords("run faster that way")); // 'faster that'