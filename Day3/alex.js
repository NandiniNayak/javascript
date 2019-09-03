var value = 2;
switch (value) {
    case 1:
        console.log("1");
    case 2:
        console.log("2");
        console.log(`value is ${value}`)
    case 3:
        console.log("3");
        value = 3;
        console.log(`value is ${value}`);
        // break;
    case 4:
        console.log("4");
        console.log(`value is ${value}`)
        break;
    case 5:
        console.log("5");
    case 6:
        console.log("6");
    default:
        console.log("default");
}