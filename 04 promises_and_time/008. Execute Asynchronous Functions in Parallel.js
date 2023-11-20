/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    let result = [];
    let fullfilled = 0;
    return new Promise((resolve, reject) => {
        functions.forEach((promise, index) => {
            promise()
                .then((response) => {
                    result[index] = response;
                    fullfilled++;
                    if (fullfilled === functions.length) {
                        resolve(result);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        })
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */