let longer = function(str1,str2) {
    if (str1.length > str2.length) {
        return str1;
    } else if(str1.length < str2.length){
        return str2;
    } else if(str1.length == str2.length){
        return str1;
    }
}

console.log(longer("drum","pirahna"));
console.log(longer("basket","fork"));
console.log(longer("flannel","sustainable"));
console.log(longer("disrupt","ability"));
console.log(longer("bird","shoe"));