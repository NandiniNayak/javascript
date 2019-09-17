console.log("person1 : shows ticket");
console.log("person2: shows ticket");

const promiseMyGirlFriendIsBringingTicks = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("ticket"), 5000);
    })
}


const getPopCorn = promiseMyGirlFriendIsBringingTicks().then(t => {
    console.log(`girl friend:  I got ${t}`);
    console.log("me: lets go in ");
    console.log("girl friend:  I want the pop corn")
    return new Promise((resolve, reject) => {
        resolve(`${t} and popcorn`)
    })
})

const addButter = getPopCorn.then(items => {
    console.log(`me: I got ${items}`);
    console.log("girlfriend: lets go in");
    return new Promise((resolve, reject) => {
        resolve(`${items} butter`)
    })
})

addButter
    .then(t =>  console.log(`person3: shows ${t}`))
    .catch(err => console.log(err));

console.log("person4: shows ticket");
console.log("person 5: shows ticket");