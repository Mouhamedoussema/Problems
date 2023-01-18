/*function squareCheck(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Number.isInteger(Math.sqrt(array[i]))) {
        newArr.push(Math.sqrt(array[i]))
    } else {
        newArr.push(array[i] * array[i])
    }
    
  }
  return newArr;
}
console.log(squareCheck([5, 9, 15, 7, 16]));*/



function sqrtCh (arr) {
  
    return arr.map((n) => 
    Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : n * n
    )
}
console.log(sqrtCh([5, 9, 16, 12]));



