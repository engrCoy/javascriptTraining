let alternatingCaps = function(sentence) {
    let sentArr = sentence.split(' ');
    let alt = [];
    for(let i = 0; i < sentArr.length; i++) {
        if(i % 2 === 0) {
            alt.push(sentArr[i].toLowerCase());
        } else {
            alt.push(sentArr[i].toUpperCase());
        }
    }
    return alt.join(' ');
}

console.log(alternatingCaps("take them to school")); // 'take THEM to SCHOOL'
console.log(alternatingCaps("What did ThEy EAT before?")); // 'what DID they EAT before?'


