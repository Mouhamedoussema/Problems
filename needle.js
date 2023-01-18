function needle (array) {
    for (let i = 0; i < array.length ; i++ ){
        if (array[i] === "needle"){
            return "this is " + i;
        }
    }
    
}
console.log(needle(["banas", "apple", "needle", "fraise"]));