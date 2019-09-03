class Dog {
    constructor(name) {
        this.name = name;
        this.count++;
    }
    static dogCount() {
        return `the dog count is ${this.count}`;
    }
}
var dog1 = new Dog("Tommy");
var dog2 = new Dog("Rex");

console.log(Dog.dogCount());