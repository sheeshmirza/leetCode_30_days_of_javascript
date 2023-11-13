/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultArray[i] = fn(arr[i], i, arr);
    }
    return resultArray;
};