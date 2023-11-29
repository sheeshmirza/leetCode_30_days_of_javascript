/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    let result = {};
    for (let index = 0; index < this.length; index++) {
        let element = this[index];
        let groupingKey = fn(element);
        if (result[groupingKey]) {
            result[groupingKey].push(element);
        } else {
            result[groupingKey] = [element];
        }
    }
    return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */