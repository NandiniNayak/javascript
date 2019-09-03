function Person (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.speak = function () {
        console.log( "hello");
    }
}

// instance of function
var person1 = new Person("Bob","ross", 20);
console.log(person1.firstName);
console.log(person1.age);

// to add custom function to a function object, use prototype keyword
Person.prototype.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

console.log(person1.fullName());

person1.speak();

var person2 = new Person ("Alex", "Holder", 18);
console.log(person2.fullName());
Person.prototype.height = "6 ft";

person1.height = "5ft";
console.log(person1.height);
console.log(person2.height);

// Person.speak();

