/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    let arrNew = [];
    for (let i = 0; i < arr.length;) {
        let arrTemp = [];
        for (let j = 0; j < size && i < arr.length; j++) {
            arrTemp.push(arr[i]);
            i++;
        }
        arrNew.push(arrTemp);
    }
    return arrNew;
};