class Home {
    constructor() {
    }
    static unlock(passPhrase) {
        // if (passPhrase == "Please"){
        //     console.log("Please enter");
        // } else {
        //     console.log(" not allowed");
        // }
        passPhrase == "Please" ? console.log("please enter") : console.log("not allowed");
    }
}

Home.unlock("code word is red");
