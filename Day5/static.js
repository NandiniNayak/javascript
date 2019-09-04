var count = 0;
class Dog {
    static setCount () {
        Dog.count = 0;
    }
    constructor(name) {
        this.name = name;
        Dog.count++;
    }

    static dogCount() {
        console.log(this.props)
        return `the dog count is ${Dog.count}`;
    }
}
// initialze the count variabel for the Dog class
// Dog.count = 0;

// alternate syntax
Dog.setCount();

var dog1 = new Dog("Tommy");
var dog2 = new Dog("Rex");

console.log(Dog.dogCount());

class Dog {
    // static setCount() {
    //     Dog.count = 0;
    // }
    constructor(name) {
        this.name = name;
        this._count ++;
    }
    set dogCount(count){ this._count = count }
    get dogCount() { return this._count}
}
// initialze the count variabel for the Dog class
// Dog.count = 0;

// alternate syntax
// Dog.setCount();

var dog1 = new Dog("Tommy");
var dog2 = new Dog("Rex");

Dog.dogCount(0);
console.log(Dog.dogCount());