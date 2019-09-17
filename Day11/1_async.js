// a synchronous function can be made asynchronous by adding async keyword in front of it
// async function always returns a promise

async function greet() {
    throw "some thing went wrong";
}

// function greet(){
//     return new Promise((resolve, reject) =>{
//         return resolve("hello");
//     })
// }


console.log(greet());

greet()
    .then(m => console.log(m))
    .catch(err =>  console.log(err));