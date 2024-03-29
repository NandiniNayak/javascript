// console.log("What is your name?");
// var name;
// name = process.stdin.read();
// // alert("hello world");

console.log("What is your name.");
process.stdin.on('readable', function () {
    name = process.stdin.read();
    if (name !== null) {
        console.log(`Hello ${name}`);
        console.log("Hello " + name);
        // used to exit from the code
        process.exit();
    }
});

// Notice how the following code continues, while I am waiting for the name to be entered
console.log("something else happens while waiting for the name to be entered, due to callback function, hence not slowing down the process");


// also note how the timeout function allows us to enter name, while waiting for 3 seconds
setTimeout(function () {
    console.log("Hello after 3 seconds");
}, 3000);
