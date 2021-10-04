function completeNumber(n) {
    let sum = 0;
    for (let b = 1; b <= n/2; b++) {
        if (n % b === 0) {
            sum = sum + b
        }
    }
    if (n === sum) return console.log("Yes");
    else return console.log("No")
}

completeNumber(27)
completeNumber(6)
completeNumber(146)
completeNumber(28)
completeNumber(496)
completeNumber(8128)
