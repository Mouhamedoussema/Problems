/*function operator(op, n1, n2) {
    if (op === "+") return n1 + n2;
    if (op === "-") return n1 - n2;
    if (op === "*") return n1 * n2;
    if (op === "/") return n1 / n2;
}
console.log(operator("*", 60, 50));*/



function evaluation(operation , n1, n2) {
    return eval(n1 + operation + n2);
}
console.log(evaluation("+", 60, 50));




