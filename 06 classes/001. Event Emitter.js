class EventEmitter {

    constructor() {
        this.store = {};
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        let index = -1;
        if (this.store[eventName]) {
            this.store[eventName].push(callback);
            index = this.store[eventName].length - 1;
        } else {
            this.store[eventName] = [callback];
            index = 0;
        }
        return {
            unsubscribe: () => {
                this.store[eventName][index] = null;
                return undefined;
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (this.store[eventName]) {
            let result = [];
            for (let cb of this.store[eventName]) {
                if (cb != null) {
                    result.push(cb(...args));
                }
            }
            return result;
        } else {
            return [];
        }
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */