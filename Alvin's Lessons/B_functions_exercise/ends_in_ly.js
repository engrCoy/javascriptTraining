let endsInLy = function (str) {
    return str.slice(-2) == 'ly'
}


console.log(endsInLy("pretty"));
console.log(endsInLy("instant"));
console.log(endsInLy("analytic"));
console.log(endsInLy("timidly"));
console.log(endsInLy("fly"));
console.log(endsInLy("gallantly"));
