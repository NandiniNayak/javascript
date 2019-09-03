var age = 10; 
const pi = 3.14;

// variable called age is declared
// value 10 is assigned to the variable age

age = 20;
{
    // block scope applies for both const and let
    // const pi = 3.14;
    var name = "HUSS";
    console.log(pi);
    
}
console.log(name);

console.log(pi);

console.log(age)
