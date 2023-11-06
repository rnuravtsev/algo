/**
 * @param {Function[]} functions
 * @return {Function}
 */
// const compose123 = function(functions: Array<(x: number) => number>) {
//     return function(x: number) {
//         return functions.reduceRight((acc, curr) => {
//             return curr(acc)
//         }, x)
//     }
// };
//
// const fn = compose123([(x) => x + 1, (x) => x * x, (x) => 2 * x])
//
// console.log('911.',
//     fn(5)
// )

function compose5(...functions: any[]) {
    return function(x: number) {
        return functions.reduceRight((acc, current) => {
            return current(acc)
        }, x)
    }
}

const addOne = (a: number) => a + 1
const multTwo = (b: number) => b * 2
const addOneMultTwo = compose5(multTwo, addOne)

console.log('911 | 🚑', addOneMultTwo(5)) // returns 12
