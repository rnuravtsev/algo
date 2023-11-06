// 1. Вариант (в лоб)
class TimeLimitedCache<T extends Record<string | number, unknown>, K extends keyof T> {
    data = {} as T
    timers = {} as Record<K, ReturnType<typeof setTimeout>>

    private _updateCache(key: K, value: T[K], duration: number) {
        this.data[key] = value

        this.timers[key] = setTimeout(() => {
            delete this.timers[key]
            delete this.data[key]
        }, duration)
    }

    set(key: K, value: T[K], duration: number) {
        if (this.data[key]) {
            const prevTimer = this.timers[key]
            if (prevTimer) {
                clearTimeout(prevTimer)
            }

            this._updateCache(key, value, duration)

            return true
        }

        this._updateCache(key, value, duration)

        return false
    }

    get(key: K) {
        return this.data[key] ? this.data[key] : -1
    }

    count() {
        return Object.keys(this.data).length
    }
}

const cache = new TimeLimitedCache();

setTimeout(() => console.log(cache.set(1, 500, 450)),   0);   // false
setTimeout(() => console.log(cache.get(1)),           100);   // 500
setTimeout(() => console.log(cache.set(2, 600, 350)), 200);   // false
setTimeout(() => console.log(cache.get(2)),           300);   // 600
setTimeout(() => console.log(cache.count()),          400);   // 2
setTimeout(() => console.log(cache.set(2, 800, 250)), 500);   // true
setTimeout(() => console.log(cache.count()),          600);   // 1

// setTimeout(() => console.log(cache.set(1, 42, 50)), 0); // false
// setTimeout(() => console.log(cache.set(1, 50, 100)), 40); // true
// setTimeout(() => console.log(cache.get(1)), 50); // 50
// setTimeout(() => console.log(cache.get(1)), 120); // 50
// setTimeout(() => console.log(cache.get(1)), 200); // -1
// setTimeout(() => console.log(cache.count()), 250); // 0

// 2. Вариант с Proxy
