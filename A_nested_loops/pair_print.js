let pairPrint = function (array) {
    for(let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            console.log(array[i] + ' - '+ array[j]);
        }
    }
}


pairPrint(["artichoke", "broccoli", "carrot", "daikon"]);
// prints
//  artichoke - broccoli
//  artichoke - carrot
//  artichoke - daikon
//  broccoli - carrot
//  broccoli - daikon
//  carrot - daikon

pairPrint(["apple", "banana", "clementine"]);
// prints
//  apple - banana
//  apple - clementine
//  banana - clementine