// let ourPromise = new Promise(cb)

// resolve - >  process was successful
// reject ->  something went wrong
let ourPromise = new Promise((resolve, reject) => {
    if (true){
        resolve(" All good");
    } else {
        reject("somethig went wrong");
    }
})
// exceute a promise code
// .then if successful
// .catch if there was a error
// ourPromise
//     .then(cb)
//     .catch(cb)
ourPromise
    .then((result) => {
        console.log(result)
    })
    .catch((err)=> {
        console.log(err)
    })

