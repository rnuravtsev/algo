const rle = (str: string) => {
    if (str !== '' && !/^[a-zA-Z]+$/.test(str)) {
        throw new Error('WTF is THIS, i`m expected only `A` or `Z`!')
    }
    const result :string[] = []
    const dict: Record<string, number> = {}

    str.split('').reduce((acc, current, index, array) => {
        acc[current] ? acc[current] += 1 : acc[current] = 1

        let next = array[++index]
        if(current !== next) {
            result.push(`${current}${acc[current] > 1 ? acc[current] : ''}`)
            delete acc[current]
            return acc
        }

        return acc

    }, dict)

    return result.join('')
}

console.log('911.', rle('1'))
console.log('911.', rle('AAAABBDBBBBCCCXXZ'))

// Авторское решение
/**
 * function rle(str) {
 *     if (!/^[A-Z]*$/.test(str)) {
 *         throw new Error(`Given string ${str} contains invalid characters`);
 *     }
 *
 *     return str.replace(/(.)\1+/g, group => (group[0] + group.length));
 * }
 * */
