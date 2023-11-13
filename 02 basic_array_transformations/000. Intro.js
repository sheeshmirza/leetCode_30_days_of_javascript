// => MAP

Array.prototype.map = function (callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        let element = callback(this[index], index, this);
        resultArray.push(element);
    }
    return resultArray;
}

// => FILTER

Array.prototype.filter = function (callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        let element = callback(this[index], index, this);
        if (element) {
            resultArray.push(this[index]);
        }
    }
    return resultArray;
}

// => REDUCE

Array.prototype.reduce = function (callback, init) {
    let accumulator = init;
    for (let index = 0; index < this.length; index++) {
        accumulator = callback(accumulator, this[index], index, this);
    }
    return accumulator;
}