var name  = "kats";

// // string interpolation
console.log(`hello ${name}`);

// // string concatentation 
console.log("hello" + name );

// // JSON 
var data = {
    "name": "ewe-lin",
    "age": 10
};

// // Object syntax
var data = {
    "name": "ewe-lin",
    "age": 10
};

// or

var data = {
    name: "ewe-lin",
    age: 10
};
destructure
var gentechClass = ["Dave","Huss","Aidan", "Ewe-lin"]
var [first, second, ...others] = gentechClass;
console.log(first);
console.log(second);
console.log(others);

var gentechClass = ["Dave","Huss","Aidan", "Ewe-lin"];
var [...gentechCopy] = gentechClass;
gentechClass[0] = "Alex";
console.log(gentechClass);
console.log(gentechCopy);

var people = {
    name: "Alex",
    age: 115,
    hobby: "gaming",
    languages: ["c#", "ruby", "javascript", "everything"]
}
let name = people.name;
let age = people.age;
let {name,age, ...others} = people;
console.log(age);
console.log(others);

let {...peopleCopy} = people;
people.name = "Salman";
console.log(people);
console.log(peopleCopy);
var people = {
    name: "Alex",
    age: 115,
    hobby: "gaming"
}
let { name, age, ...elephant} = people;
console.log(name);
console.log(elephant);
console.log(age);



var superHeroesBirthPlace