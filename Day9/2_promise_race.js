function user1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("David");
        }, 2000);
    })
}

// create another function that returns a promise
// user: kats , after 3 seconds
function user2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Cannot find the user");
        }, 2000);
    })
}

function user3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Shun");
        }, 2000);
    })
}

var userList = [user2(), user1(), user3()];

Promise.race(userList)
    .then(userNames => console.log(userNames))
    .catch(err => console.log(err));