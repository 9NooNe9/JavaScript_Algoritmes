function fizzBuzz(num1) {
    if (num1 % 15 === 0) return console.log("FizzBuzz");
    else if (num1 % 3 === 0) return console.log("Fizz");
    else if (num1 % 5 === 0) return console.log("Buzz");
    else return console.log(num1);
}


fizzBuzz(23)
fizzBuzz(1)
fizzBuzz(5)
fizzBuzz(3)
fizzBuzz(15)
fizzBuzz(45)
