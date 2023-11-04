console.log(classNames("foo", "bar")); // => 'foo bar'
console.log(classNames("foo", { bar: true })); // => 'foo bar'
console.log(classNames({ "foo-bar": true })); // => 'foo-bar'
console.log(classNames({ "foo-bar": false })); // => ''
console.log(classNames({ foo: true }, { bar: true })); // => 'foo bar'
console.log(classNames({ foo: true, bar: true })); // => 'foo bar'
console.log(
    classNames("foo", { bar: true, duck: false }, "baz", { quux: true })
); // => 'foo bar baz quux'
console.log(classNames(null, false, "bar", undefined, 0, 1, { baz: null }, "")); // => 'bar 1'
console.log(classNames('bar', [1, null, 'baz'], {baz: true}, '3')); // => 'bar 1 baz baz 3'
console.log(classNames('bar', [1, null, 'baz', ['foo', 'test']], {baz: true}, '3')); // => 'bar 1 baz foo test baz 3'

type Indexed<T = any> = {
    [key in string]: T
}

function isArray(value: unknown): value is [] {
    return Array.isArray(value)
}
function isPlainObject(value: unknown): value is Indexed {
    return typeof value === 'object'
        && value !== null
        && value.constructor === Object
        && Object.prototype.toString.call(value) === '[object Object]'
}

function classNames(entity: unknown, ...config: unknown[]): string {
    let inputClasses = [entity, config]
    let totalClass = ''

    const getValidClassFromObject = (obj: object) => Object.entries(obj).reduce((acc, [key, value]) => {
        acc += value ? `${key} ` : ''
        return acc
    }, '')

    totalClass = inputClasses.reduce((acc, current) => {
        if (typeof current === 'string' || (typeof current === 'number' && current !== 0)) {
            acc += `${current} `
        }

        if (isPlainObject(current)) {
            const value = getValidClassFromObject(current)
            acc += value
        }

        if (isArray(current) && current.length !== 0) {
            acc += current.map(el => classNames(el)).join(' ')
        }

        return acc
    }, '') as string;

    const doubleAndMoreSpaceRegExp = /\s{2,}/g
    return totalClass.trim().replaceAll(',', ' ').replaceAll(doubleAndMoreSpaceRegExp, ' ')

}
export default classNames
