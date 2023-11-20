// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
new Promise((resolve, reject) => {
    if (true === true) {
        resolve();
    } else {
        reject();
    }
});

/*
The Promise.resolve() static method "resolves" a given value to a Promise.
If the value is a promise, that promise is returned
if the value is a thenable, Promise.resolve() will call the then() method with two callbacks it prepared
otherwise the returned promise will be fulfilled with the value.
*/
Promise.resolve();
Promise.prototype.then();

/*
The Promise.reject() static method returns a Promise object that is rejected with a given reason.
The catch() method of Promise instances schedules a function to be called when the promise is rejected.
*/
Promise.reject();
Promise.prototype.catch();

/*
The finally() method of Promise instances schedules a function to be called when the promise is settled (either fulfilled or rejected).
*/
Promise.prototype.finally();

/*
The Promise.all() static method takes an iterable of promises as input and returns a single Promise
*/
Promise.all([]);

/*
The Promise.allSettled() is a method that allows you to handle multiple promises simultaneously
and obtain the result of each promise, regardless of whether it resolves or rejects
*/
Promise.allSettled([]);

/*
The Promise.race() method returns a promise that fulfills or rejects
as soon as one of the promises in an iterable fulfills or rejects,
with the value or reason from that promise.
*/
Promise.race([]);

/*
The Promise.any() method is a static method that takes an array of promises as a parameter and returns the first fulfilled promise
*/
Promise.any([]);

// setTimeout() is an asynchronous function that is commonly used to call a function after a specific timeout
/*
setTimeout(handler, timeout, argsArray); // It takes a callback function, a timeout in millis, and args
clearTimeout(timeout);
*/
let timeout = setTimeout(() => { }, 1000, []);
clearTimeout(timeout);

// setInterval() is an asynchronous function that is commonly used to set a delay for functions that are executed again and again
/*
setInterval(handler, timeout, argsArray); // It takes a callback function, a timeout in millis, and args
clearInterval(interval);
*/
let interval = setInterval(() => { }, 1000, []);
clearInterval(interval);