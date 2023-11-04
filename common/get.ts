const get = (str: string, obj: Record<string, unknown> | []): unknown => {
    const strArr = str.split('.')

    return strArr.reduce((acc: any, cur: string) => {
        if (typeof acc[cur] === 'undefined') {
            throw new Error(`${cur} not found in ${acc}`)
        }

        return acc[cur]
    }, obj)
}

console.log('911.', get('a.b.g.c', { a: { b: { g: { c: '<3' } } } }))
