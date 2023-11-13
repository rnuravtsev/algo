// аналог lodash.invert
// { a: 1 } => { 1: 'a' }

function invert(obj: Record<string, any>): Record<number, string> {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        acc[value] = key

        return acc
    }, {} as Record<any, string>)
}

const solis = {
    a: 1,
    b: 'asd'
}

console.log('911 | 🚑', invert(solis))
