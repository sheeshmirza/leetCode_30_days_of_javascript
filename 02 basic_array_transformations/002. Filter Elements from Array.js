/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        let something = fn(arr[i], i, arr);
        if (something) {
            resultArray.push(arr[i]);
        }
    }
    return resultArray;
};