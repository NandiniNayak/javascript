function user1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("I can't find this user")
        }, 2000);
    })
}

// create another function that returns a promise
// user: kats , after 3 seconds
function user2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("kats")
        }, 3000);
    })
}

function user3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Shun")
        }, 5000);
    })
}

var userList = [ user1(), user2(), user3()];

Promise.all(userList)
    .then(userNames =>  console.log(userNames))
    .catch(err =>  console.log(err));