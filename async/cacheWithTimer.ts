// class TimeLimitedCache<T extends Record<string | number, unknown>, K extends keyof T> {
//     data = {} as T
//     timers = {} as Record<K, ReturnType<typeof setTimeout>>
//
//     private _updateCache(key: K, value: T[K], duration: number) {
//         this.data[key] = value
//
//         this.timers[key] = setTimeout(() => {
//             delete this.timers[key]
//             delete this.data[key]
//         }, duration)
//     }
//
//     set(key: K, value: T[K], duration: number) {
//         if (this.data[key]) {
//             const prevTimer = this.timers[key]
//             if (prevTimer) {
//                 clearTimeout(prevTimer)
//             }
//
//             this._updateCache(key, value, duration)
//
//             return true
//         }
//
//         this._updateCache(key, value, duration)
//
//         return false
//     }
//
//     get(key: K) {
//         return this.data[key] ? this.data[key] : -1
//     }
//
//     count() {
//         return Object.keys(this.data).length
//     }
// }

// const cache = new TimeLimitedCache();

// setTimeout(() => console.log(cache.set(1, 500, 450)),   0);   // false
// setTimeout(() => console.log(cache.get(1)),           100);   // 500
// setTimeout(() => console.log(cache.set(2, 600, 350)), 200);   // false
// setTimeout(() => console.log(cache.get(2)),           300);   // 600
// setTimeout(() => console.log(cache.count()),          400);   // 2
// setTimeout(() => console.log(cache.set(2, 800, 250)), 500);   // true
// setTimeout(() => console.log(cache.count()),          600);   // 1

const generateKey = (...args: unknown[]): string => {
    return args.map(arg => {
        if (Array.isArray(arg)) {
            return generateKey(...arg)
        }

        return `${typeof(arg)}<${String(arg)}>`
    }).join(', ')
}

// 2. Вариант от ЯП
const memoizeAsyncYP = (fn: (...args: unknown[]) => unknown, timeout: number) => {
    const cache: Record<string, { value: unknown, expire: number }> = {}

    return (...args: unknown[]) => {
        const key = generateKey(args)
        const result = cache[key]

        if (typeof result === 'undefined' || Date.now() > result.expire) {
            return Promise.resolve(fn(...args)).then(value => {
                cache[key] = { value, expire: Date.now() + timeout }

                return value
            })
        }

        return Promise.resolve(cache[key])
    }
}

const mockedGetData1 = (value: unknown) => new Promise((resolve) => setTimeout(() => resolve(value), 1500))

const cache = memoizeAsyncYP(() => mockedGetData1(77), 2000)

cache()
    .then(console.log) // получаем долго
    .then(() => {
        setTimeout(() => cache().then(console.log), 12000)
    })
    .then(() => cache(mockedGetData1(42), 3000))
    .then(result => console.log('2', result)) // получаем быстро, из кеша
    .then(() => cache())
    .then(result => console.log('3', result)) // получаем быстро, из кеша
    .then(() => {
        // получаем долго, считается заново
        setTimeout(() => cache().then(console.log), 5000);
    });
