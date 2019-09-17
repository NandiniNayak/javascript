const adder = async(num1, num2) => {

    const addTwoNumers = new Promise((resolve, reject) => {
        if (isNaN(num1) || isNaN(num2)) {
            reject("enter two numbers")
        } else {
            resolve(num1 + num2)
        }
    })
    
    let answer1 = await addTwoNumers(10, 20);
    let answer2 = await addTwoNumers(answer1, 3);
    console.log(ans)
    return answer2;
}

adder()
