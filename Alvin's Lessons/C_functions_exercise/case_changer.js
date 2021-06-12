let caseChange = function(str,bool) {
    if (bool == true) {
        return str.toUpperCase();
    } else if(bool == false) {
        return str.toLowerCase();
    }
}

console.log(caseChange("Super", true));
console.log(caseChange("Super", false));
console.log(caseChange("tAmBourine", true));
console.log(caseChange("tAmBourine", false));