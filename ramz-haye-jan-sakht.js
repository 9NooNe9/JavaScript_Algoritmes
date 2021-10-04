function isPrime(a) {
    if (a === 2) return true;
    if (a === 1) return false;
    for (let i = 2; i <= ((a / 2) + 1); i++) {
        if (a % i === 0) return false;
    }
    return true;
}

function isHard(i) {
    let z = i;
    while (isPrime(z)) {
        z = (z - z % 10) / 10
        if (z <= 10) {
            if (isPrime(z)) return true;
        }
    }
    return false;

}

isHard(2)
isHard(4)