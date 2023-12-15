/*
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]
 */

const myPromiseAll = <AnyPromise = Promise<unknown>>(promises: AnyPromise[]) => {
    return new Promise((res, rej) => {
        const results: AnyPromise[] = []
        let counter = 0

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(result => {
                results[index] = result
                counter += 1

                if(counter === results.length) {
                    res(results)
                }
            }).catch(e => rej(e))
        })
    })
}
