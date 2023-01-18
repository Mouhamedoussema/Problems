/*function countBy (n, b) {
    newArr = [];
    for (let i = 1; i <= b; i++){
        newArr.push(n * i)
       
    }
return newArr
}
console.log(countBy(3, 7));*/






function countBy (x, n) {
    return Array.from(Array(n+1).keys()).slice(1).map((number) => number * x);
}

console.log(countBy(5, 10));