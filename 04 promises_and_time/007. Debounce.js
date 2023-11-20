/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let timer = setTimeout(() => true, t);
    return function (...args) {
        if (timer._destroyed === true) {
            timer = setTimeout(() => fn(...args), t);
        } else {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), t);
        }
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */