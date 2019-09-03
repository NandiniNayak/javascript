// // multiply(2,4);
// // function multiply(num1, num2) {
// //     return num1 * num2;
// // }
// // multiply(2, 4);

// // function expression syntax (anonymous func)
// // ES5

// let multiply = function(num1, num2){
//     return num1 * num2;
// }
// multiply(10, 20);


// IIFE : Immediately invoked func expression
let product = (function (num1,num2){
    return num1 * num2;
})(10, 20);

// arrow function syntax ( ES6 syntax)

let multiply = function (num1){
    console.log(num1);
    console.log(arguments['1']);
    return num1 * num2
}

multiply(10, 20);

// function multiply(num1) {
//     console.log(arguments['1']);
// }

// multiply(10, 20);
