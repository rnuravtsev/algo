/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose123 = function(functions: Array<(x: number) => number>) {
    return function(x: number) {
        return functions.reduceRight((acc, curr) => {
            return curr(acc)
        }, x)
    }
};

const fn = compose123([(x) => x + 1, (x) => x * x, (x) => 2 * x])

console.log('911.',
    fn(5)
)
