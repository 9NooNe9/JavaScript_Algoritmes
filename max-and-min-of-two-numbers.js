function maxMin(a, b) {
    if (a > b) {
        console.log(`maximum is ${a} minimum is ${b}`)
    } else if (b > a) {
        console.log(`maximum is ${b} minimum is ${a}`)
    } else {
        console.log(`numbers are equal`)
    }
}

maxMin(5, 6);
maxMin(-1, 8);
maxMin(10, 10);