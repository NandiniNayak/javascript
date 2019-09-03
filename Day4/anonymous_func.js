// // invoked
// greet();
// // // // defined
// function greet() {
//     console.log("welcome");
// }

// JE
// hoists function statements
// function greet() {
//     console.log("welcome");
// }
// greet();

// does not exceute if you invoke before definition
// anonymousFunc();
// function expressions or anonymous functions
// var anonymousFunc = function() {
//     console.log( "I am anonymous");
// }
// function call or invocation
// anonymousFunc();

// function anonymousFunc() {
//     console.log(" I am anonymous");
// }
// anonymousFunc()


// var age = prompt("Enter your age")

// if ( age > 18){
//     // let name = "hayden";
//     // let age = 10;
//     // let isOk = true;
//     var welcome = function (){
//         console.log("hello you are an adult, do whatever you want");
//     }
// } else {
//     var welcome = function() {
//         console.log( "hello you are too young for this");
//     }
// }
// welcome();

// greet();
// function greet(){
//     console.log("greet fuunc exceuted");
// }
// Immediately invoked function expression
(function welcome() {
    console.log("hello world");
}());

(function welcome() {
    console.log("hello world");
})();

// welcome();


