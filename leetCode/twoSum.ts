// Сложность O(n^2)
// export const twoSum = (nums: number[], target: number) => {
//     const result: number[] = []
//
//     for (let i = 0; i <= nums.length - 1; i++) {
//         for (let j = i + 1; j <= nums.length - 1; j++) {
//             if (nums[i] + nums[j] === target) {
//                 result.push(i)
//                 result.push(j)
//
//                 break;
//             }
//         }
//     }
//
//     return result
// };

// // Сложность O(n)
// export const twoSum = (nums: number[], target: number) => {
//     const result: number[] = []
//     const numsToIndex: Record<string, number> = {}
//
//     for (let i = 0; i <= nums.length - 1; i++) {
//         numsToIndex[nums[i]] = i
//     }
//
//     for (let i = 0; i <= nums.length - 1; i++) {
//         const complement = target - nums[i]
//
//         if (complement in numsToIndex && i !== numsToIndex[complement]) {
//             return [i, numsToIndex[complement]]
//         }
//     }
//
//     return result
// };

// Самое быстрое решение по ms
export const twoSum = (nums: number[], target: number) => {
    const map = new Map();

    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        const diff = target - num;

        if (map.has(diff)) {
            return [map.get(diff), i]
        }

        map.set(num, i)
    }

    return []
};
