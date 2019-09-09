// function person() {
//     console.log( "normal function");
// }


// Arrow function

// () => {
//     console.log("Arrow function");
// }
// funcions are objects
/**  1. passed to another function
2. can be part of an Array
3. can be part of an object
4. can be assigned to a variable
5. functions can be invoked () */

// function person(function1) {
//     console.log( "person function");
// }

// function function1() {
//     console.log( "another function");
// }
// person (() => {
//     console.log( "another function");
// })


let array = ["philip", "shun", "dan"];
function func1 () {
    console.log( "func 1");
}
function func2() {
    console.log( "func2");
}
function func3 () {
    console.log("func3")
}
let arrayOfFunctions = [func1 (), func2(), func3()];

console.log(arrayOfFunctions[0]);

// Do not use arrow functions in classes and objects
// var person = {
//     firstName: "Hayden",
//     lastName: "Fuller",
//     fullName:  function () {
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }
// person.fullName();


// let name = "EWE LIN";

// let greet = function () {
//     console.log( "hello");
// }
// greet();