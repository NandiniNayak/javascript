/**
 control structures
1. if ;  else if ;else
2. switch statements
3. ternary operators
 */

if (1 && 1) {
    console.log( "its true");
} else if(true){
    console.log("its false");
} else {
    console.log("default case");
}

// Ternary operators
age = 18;
let allowed = age > 18 ? "true" : "false";
console.log(allowed);

// switch statements
var  favBird = "cockatoo";

switch (favBird.toUpperCase) {
    case "Crow":
        console.log( "its a crow");
        break;
    case "Peacock":
        console.log("its a peacock");
        break;
    case "Cockatoo":
        console.log("its cockatoo");
        break;
    default:
        console.log("I don't know this bird");
        break;
}