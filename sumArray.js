function sumArray(array) {
    return array.filter((x) => x!== Math.max(...array) && x!== Math.min(...array))
    .reduce((acc, current) => acc + current , 0);
}

console.log(sumArray([4, 5, 10, 1]));