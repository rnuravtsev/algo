// @ts-ignore

declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>
    }
}

// @ts-ignore
Array.prototype.groupBy = function<T>(fn: (item: T) => string) {
    const groups: Record<string, T[]> = Object.create(null)

    this.forEach(cur => {
        const key = fn(cur)

        groups[key] ??= []
        groups[key].push(cur)
    })

    return groups
}

// @ts-ignore
const arrGB = [1,2,3].groupBy(String)

console.log('911 | 🚑', arrGB)

// [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
