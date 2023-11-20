
var TimeLimitedCache = function () {
    this.cache = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    let exists = false;
    if (this.cache[key]) {
        exists = true;
        clearTimeout(this.cache[key].timer);
        delete this.cache[key];
    }
    this.cache[key] = {
        value: value,
        timer: setTimeout(() => delete this.cache[key], duration),
    };
    return exists;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    if (this.cache[key]) {
        return this.cache[key].value;
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    let counts = 0;
    for (let keys in this.cache) {
        counts++;
    }
    return counts;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */