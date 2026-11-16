Array.prototype.myMap = function(callback) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        let value = callback(this[i]);
        result.push(value);
    }

    return result;
};

let numbers = [1, 2, 3];

let answer = numbers.myMap(function(num) {
    return num * 2;
});

console.log(answer);