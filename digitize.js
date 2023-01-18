/*function digitize(number) {
    let Str = number.toString();
     let arr = Str.split("");   
     map = arr.map((m) => Number(m))
     rArr = arr.reverse();
     return rArr;
}
console.log(digitize(4564845));*/



function digitize (num) {
    return num
    .toString()
    .split("")
    .map((m) => Number(m))
    .reverse();
}
console.log(digitize(569987));