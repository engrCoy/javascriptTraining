let printCombinations = function(first, second) {
    for(let i = 0; i < first.length; i++) {
        for(let j = 0; j < second.length; j++) {
            console.log(first[i] + ' ' +second[j]);
        }
    }
}

let colors = ["gray", "cream", "cyan"];
let clothes = ["shirt", "flannel"];
printCombinations(colors, clothes);
// prints
//  gray shirt
//  gray flannel
//  cream shirt
//  cream flannel
//  cyan shirt
//  cyan flannel

printCombinations(["hot", "cold"], ["soup", "tea"]);
// prints
//  hot soup
//  hot tea
//  cold soup
//  cold tea