function makeMultiplier(multiplier) {
    function multiply(number) {
        return number * multiplier;
    }

    return multiply;
}

let triple = makeMultiplier(3);

console.log(triple(5));