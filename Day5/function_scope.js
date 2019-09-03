myFunc1();
myFunc2();

var name = "Philip";

// invoke or call function

function myFunc1 () {
    console.log(name);
}
function myFunc2() {
    console.log(name);
}


// JE : HOISTING

var name;

function myFunc1() {
    console.log(name);
}
function myFunc2() {
    console.log(name);
}

myFunc1();
myFunc2();

name = "Philip";

