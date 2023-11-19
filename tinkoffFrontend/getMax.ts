const getMax = <T extends number>(arr: T[], cb?: (a:T, b: T) => T ): T | undefined => {
    const copy = arr.slice()
    cb ? copy.sort(cb) : copy.sort((a, b) => a - b)

    return copy.at(-1)
}


// console.log('911 | 🚑', getMax([44, 23, 1, 1999, 2323, 33, 563]))
console.log('911 | 🚑', getMax([]))


