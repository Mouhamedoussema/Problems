/*function countSh(array) {
    initValue = 0;
    for (let i=0; i < array.length; i++) {
        if (array[i] === true){
            initValue += 1;
        } else {
            initValue += 0;
        }
    }

    return initValue;
}
console.log(countSh([true, false, true, true ,true, false, true]));*/


function countSh (array) {
    let counter = 0;
    array.map((m) => {
        if (m === true){
            counter++;
        }
    })
    return counter;
}
console.log(countSh([true, false, true, true ,true, false, true]));
