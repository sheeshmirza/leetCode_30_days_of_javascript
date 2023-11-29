/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (Array.isArray(obj)) {
        let arrNew = [];
        for (let index = 0; index < obj.length; index++) {
            if (Boolean(obj[index])) {
                arrNew.push(compactObject(obj[index]));
            }
        }
        return arrNew;
    } else if (typeof (obj) === "object") {
        for (let key in obj) {
            if (!Boolean(obj[key])) {
                delete obj[key];
            } else {
                obj[key] = compactObject(obj[key]);
            }
        }
    }
    return obj;
};