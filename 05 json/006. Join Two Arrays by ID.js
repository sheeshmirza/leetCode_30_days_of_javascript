/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    let arrNew = [];
    for (let element of arr1) {
        arrNew[element.id] = element;
    }
    for (let element of arr2) {
        arrNew[element.id] = {
            ...arrNew[element.id],
            ...element,
        }
    }
    return arrNew.filter((element) => element);
};