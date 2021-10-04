function checkTypeIsString(input) {
    if (typeof input === typeof "") {
        console.log(`${input} is string`)
    } else console.log(`${input} is not string`)
}


checkTypeIsString("mahdi");
checkTypeIsString(53534);
checkTypeIsString(true);