function getData(): Promise<number> {
    return new Promise(resolve => {
        setTimeout(() => resolve(42), 1000)
    })
}


function memoizeAsync<Value>(fn: () => Promise<Value>, timeout: number): () => Promise<Value> {
    let cache: Value | null = null;
    let expire: number = Date.now() + timeout;

    return function(): Promise<Value> {
        if (!cache || Date.now() > expire) {
            return fn().then(data => {
                cache = data;
                expire = Date.now() + timeout;
                return data;
            });
        }

        return Promise.resolve(cache);
    }
}

const memoized = memoizeAsync(getData, 6000);

memoized()
    .then(data1 => console.log(data1)) // получаем долго
    .then(memoized)
    .then(data2 => console.log(data2)) // получаем быстро, из кеша
    .then(memoized)
    .then(data3 => console.log(data3)) // получаем быстро, из кеша
    .then(() => {
        setTimeout(() => {
            return memoized().then(data4 => console.log(data4)); // получаем долго, считается заново
        }, 5000);
    });

/**
 * Авторское решение
 * function memoize(fn, timeout) {
 * 	let cache = null;
 * 	let expire = Date.now() + timeout;
 *
 * 	return function() {
 * 		if (!cache || Date.now() > expire) {
 * 			return fn().then(data => {
 * 				cache = data;
 * 				expire = Date.now() + timeout;
 * 				return data;
 * 			});
 * 		}
 *
 * 		return Promise.resolve(cache);
 * 	}
 * }
*/
