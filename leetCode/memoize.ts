function memoize(fn: (...args: any[]) => unknown) {
    const cache = new Map()
    return function(...args: any[]) {
        if(cache.has(args.join(','))) {
            return cache.get(args.join(','))
        }

        const result = fn(...args)

        cache.set(args.join(','), result)

        return result
    }
}


const sum = (a: any, b: any) => a + b

const memoizedSum = memoize(sum)

console.log('911.', memoizedSum(1, 4))
// console.log('911.', memoizedSum(2, 44))
console.log('911.', memoizedSum(1, 4))
