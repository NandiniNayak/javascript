// var count = 0;
class Dog {
    // static count = 0;  is only available in ES next version, not in Es 6
    // option 2: use setters method
    static setCount() {
        Dog.count = 0;
    }
    // static makes this method a class method
    static getDogCount() {
        console.log(`total number of dogs ${Dog.count}`);
    }

    constructor(name){
        this.name = name;
        Dog.count++;
    }
}
// option1
// Dog.count = 0;
Dog.setCount();

dog1 = new Dog("Rex");
dog2 = new Dog("Tommy");

Dog.getDogCount();