// function adder(x, y){
//     let sum = x + y;
//     return sum;
// }
// var total = adder(10, 20);
// console.log(total);


// function myArgs(x, y){
//     console.log(arguments);
//     console.log(x, y);
// }
// myArgs("bob","ross","charlie");

// definition
function myOtherArgs(x, ...otherArgs){
    console.log(otherArgs);
    console.log(arguments);
    console.log(x, y);
}

// // invocation or function call
myOtherArgs("bob","ross", "charlie");

// function greet(){
//     console.log("hello philip");
// }
// greet()