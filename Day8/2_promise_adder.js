function adder(x,y){
    let answer = x + y;
    return new Promise((resolve, reject) => {
        if (isNaN(answer)) {
            reject("please input numbers");
        }
        resolve(answer);
    });   
}
adder(4, 5) 
    .then(answer => console.log(answer))
    .catch(err =>  console.log(err));

console.log( "something else is happening");

// adder(4, 5)
//     then(cb)
//     .catch(cb);

// adder(4, 5)
//     .then((answer) => {
//         console.log(answer);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


