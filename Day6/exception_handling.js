// throw "something went wrong";
// throw 1;
// throw {msg: "something wrong"};

// try {
//   console.log("before throw");
//   throw "somethig went wrong";
//   console.log("after throw");

// } catch(error) {
//     console.log(error);
// }



// try {
//     if(isNaN(10) || isNaN("number")){
//         throw "please input number only";
//     } else {
//         return num1 + num2
//     }
// }catch(error) {
//     console.log(error);
// }


function sumOfTwoNumbers(num1, num2) { 
    try {
        if (isNaN(10) || isNaN("number")) {
            throw "please input number only";
        } else {
            return num1 + num2
        }
    } catch (error) {
        console.log(error);
    }

}

sumOfTwoNumbers(10, 20)
