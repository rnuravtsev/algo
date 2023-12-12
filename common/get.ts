// const get = (str: string, obj: Record<string, unknown> | []): unknown => {
//     const strArr = str.split('.')
//
//     return strArr.reduce((acc: any, cur: string) => {
//         if (typeof acc[cur] === 'undefined') {
//             throw new Error(`${cur} not found in ${acc}`)
//         }
//
//         return acc[cur]
//     }, obj)
// }
//
// console.log('911.', get('a.b.g.c', { a: { b: { g: { c: '<3' } } } }))

export const get = (obj: Record<string, any>, path: string ) => {
    const pathArr = path.split('.')
    return pathArr.reduce((acc, currentValue) => {
        return acc[currentValue]
    }, obj)
}

// tests
//
get(
    {
        a: {
            b: {
                c: {
                    d: 'e'
                }
            }
        }
    },
    'a.b.c.d'
)
// e
