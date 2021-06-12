let filterLongWords = function (words) {
    let short = [];
    for(let i = 0; i < words.length; i++) {
        if (words[i].length < 5) {
            short.push(words[i]);
        }
    }
    return short;
}

console.log(filterLongWords(["kale", "cat", "retro", "axe", "heirloom"]));
console.log(filterLongWords(["disrupt", "pour", "trade", "pic"]));