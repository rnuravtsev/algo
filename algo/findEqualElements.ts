const a = [ 1, 2, 4, 7, 11, 19 ];
const b = [ 2, 7, 19, 28, 31 ];

function findEqualElements(arr1: number[], arr2: number[]) {
    let result: number[] = []
    const hash: Record<string, number> = {}

    arr1.reduce((acc, currentValue) => {
        if(!acc[currentValue]) {
            acc[currentValue] = 1
        } else {
            acc[currentValue] += 1
        }

        return acc
    }, hash)

    let innerCounter = 0
    arr2.reduce((acc, currentValue) => {
        if(acc[currentValue] && innerCounter < acc[currentValue]) {
            innerCounter++
            result.push(currentValue)
        }

        return acc
    }, hash)

    return result;
}

// Примеры
// console.log('911.', findEqualElements([1, 2, 3], [2])) // => [2]
// console.log('911.', findEqualElements([2], [1, 2, 3])) // => [2]
console.log('911.', findEqualElements([1, 2, 2, 3], [2, 2, 2, 2])) // => [2, 2]
// console.log('911.', findEqualElements([2, 2, 2, 2], [1, 2, 2, 3])) // => [2, 2]


// Авторское решение
// function findEqualElements(arr1, arr2) {
//     let i = 0;
//     let j = 0;
//     const result = [];
//
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] > arr2[j]) {
//             j++;
//         } else if (arr1[i] < arr2[j]) {
//             i++;
//         } else {
//             result.push(arr1[i]);
//             i++;
//             j++;
//         }
//     }
//
//     return result;
// }
