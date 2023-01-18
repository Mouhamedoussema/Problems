function sumOfPos(arr) {
    return arr.filter((x) => x > 0).reduce((acc, current) => acc + current , 0);

} 
console.log(sumOfPos([4, -5, 6, 10, -20]));