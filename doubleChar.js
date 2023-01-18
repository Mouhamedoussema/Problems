/*function doubleCh (str) {
    let arr = str.split("");
    let map = arr.map((m) => m = m+m);
    let strr = map.join("");
    return strr;
}
console.log(doubleCh("oussema"));*/



function doubleCh (str) {
    return str.split("").map((m) => m = m+m).join("");
}
console.log(doubleCh("ahmed"));
