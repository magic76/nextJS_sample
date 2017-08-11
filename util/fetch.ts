
const fetchHandler = (fetchPromise, timeout = 3000) => {
    let abortFn = null;

    // usage for about Promise
    const abortPromise = new Promise(function(resolve, reject) {
        abortFn = function() {
          reject(new Error('api timeout'));
        };
    });

    // Promise.race return first finished Promise (fetch or about)
    const abortablePromise = Promise.race([
        fetchPromise,
        abortPromise
    ]);

    setTimeout(function() {
        abortFn();
    }, timeout);
    return abortablePromise;
}

export default fetchHandler;
