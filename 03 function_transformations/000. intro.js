// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

/*
Functions in JavaScript are 'first class',
which means they are treated like any other variable — including being passed to or returned from other functions.
When they're passed as an argument to another function,
they're known as a 'callback' — to be called when the other function is ready for them.
*/

function anyFunction() {
    return function () {
        return -1;
    }
}

// anyFunction() -> returns function
// anyFunction()() -> returns -1;

function takeCallback(callback) {
    return () => callback();
}

// takeCallback (any callback function) => returns passed callback
// takeCallback()() -> call the callback

function takeCallback(...cbs) {
    return (index) => cbs[index]();
}

let callbacks = takeCallback(
    () => console.log("cb1"),
    () => console.log("cb2"),
    () => console.log("cb2"),
    () => console.log("cb2"),
);

// callbacks(any index);