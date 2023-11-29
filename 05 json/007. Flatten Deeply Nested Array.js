/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n === 0) {
        return arr;
    }
    let arrNew = [];
    for (let index = 0; index < arr.length; index++) {
        let element = arr[index]
        if (typeof (element) === 'number') {
            arrNew.push(element);
        } else if (Array.isArray(element) && element.length === 1) {
            arrNew.push(element[0]);
        } else {
            element = flat(element, n - 1);
            arrNew = arrNew.concat(element);
        }
    }
    return arrNew;
};