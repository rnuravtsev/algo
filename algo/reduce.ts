/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function(nums: number [], fn: (acc: number, current: number) => number, init = 0) {
    let result = init;
    if(nums.length === 0) {
        return result
    }

    nums.forEach(el => {
        result = fn(result, el)
    })

    return result
};

console.log('911.', reduce([1,2,3,4], function sum(accum, curr) { return accum + curr * curr; }, 100))
