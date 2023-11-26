function subarraySum(nums: number[], k: number) {
    let count = 0;
    let sum = 0;
    const map = new Map();
    map.set(0, 1);  // Инициализация для случая, когда подотрезок начинается с первого элемента

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}

/**
 * Авторское решение
 */

// function subarraySum(nums, k) {
//     let count = 0;
//     let sum = 0;
//
//     nums.reduce((hashMap, current) => {
//         sum += current;
//         if (hashMap[sum - k]) {
//             count += hashMap[sum - k];
//         }
//
//         hashMap[sum] = (hashMap[sum] || 0) + 1;
//
//         return hashMap;
//     }, {0: 1});
//
//     return count;
// }


function subArraysDDD(nums: number[], k: number) {
    let counter = 0
    let sum = 0

    nums.reduce((acc, currentValue) => {
        sum += currentValue
        if(acc[sum - k]) {
            counter += acc[sum-k]
        }

        acc[sum] = (acc[sum] || 0) + 1

        return acc
    }, {0: 1} as Record<number, number>)


    return counter
}

console.log('911 | 🚑', subArraysDDD([13,23,123], 36))
