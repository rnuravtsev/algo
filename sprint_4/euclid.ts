// euclid(6006, 3738735, 51051) --> 3003
// euclid(7) --> 7
// euclid(-421, 0.9923501, 3.1401525235324, -228.148832269) --> -1

/**
 * counts greatest common divisor for n numbers
 * by calling 'euclidForTwo' in cycle for all input params
 * @param {array} ...args contains numbers to check
 * @returns {number} solution or '-1' in case of invalid data
 */
const euclid = (...args: number[]): number => {
    const numbers = args
    const isPositiveNumbers = numbers.every(number => number > 0)

    if (!isPositiveNumbers) {
        return -1
    }
    const euclidForTwo = (max: number, min: number): number => {
        if (min === 0) {
            return max
        }

        return euclidForTwo(min, max % min)
    }

    return numbers.reduce((prev, cur) => euclidForTwo(prev, cur))

}

console.log('911.', euclid(-421, 0.9923501, 3.1401525235324, -228.148832269))
