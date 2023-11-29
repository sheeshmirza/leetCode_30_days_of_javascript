/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    const str = JSON.stringify(obj);
    return str === "{}" || str === "[]";
};