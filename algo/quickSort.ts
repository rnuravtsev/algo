// import {swap} from "./bubbleSort";
//
// function quickSort(arr: number[], start = 0, end = arr.length - 1) {
//     if(start >= end) return
//
//     const rearrange = partition(arr, start, end)
//
//     quickSort(arr, start, rearrange - 1)
//     quickSort(arr, rearrange + 1, end)
// }
//
// function partition(arr: number[], start = 0, end = arr.length - 1) {
//     const pivotValue = arr[end];
//
//     let pivotIndex = start;
//
//     for (let i = start; i < end; i++) {
//         if (arr[i] <= pivotValue) {
//             swap(arr, i, pivotIndex)
//             pivotIndex++
//         }
//     }
//
//     swap(arr, pivotIndex, end);
//
//     return pivotIndex;
// }
//
// const arry = [-1,3,423,44,5,7,0, 7, 6, 2333]
// quickSort(arry)
// console.log('911.', arry)
//
//
// // Авторское решение
// /**
//  * function partition(arr, start = 0, end = arr.length - 1) {
//  *   const pivotValue = arr[end];
//  *
//  *   let pivotIndex = start;
//  *
//  *   for (let i = start; i < end; i++) {
//  *     if (arr[i] <= pivotValue) {
//  *       swap(arr, i, pivotIndex);
//  *       pivotIndex++;
//  *     }
//  *   }
//  *
//  *   swap(arr, pivotIndex, end);
//  *
//  *   return pivotIndex;
//  * }
//  *
//  * function swap(arr, i, j) {
//  *   const tmp = arr[i];
//  *   arr[i] = arr[j];
//  *   arr[j] = tmp;
//  * }
//  * */
//

function quickSort(arr: number[], start = 0, end = arr.length - 1) {
    if(start >= end) return

    const wall = getWall(arr, start, end)

    quickSort(arr, start, wall - 1)
    quickSort(arr, wall + 1, end)

}

function getWall(arr: number[], start: number, end: number) {
    const pivot = arr[end]
    let wall = start

    for(let i = start; i < end; i++) {
        if(arr[i] < pivot) {
            swap(arr, i, wall)
            wall++
        }
    }

    swap(arr, wall, end)

    return wall
}

function swap(arr: number[], i: number, j: number) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}


const arry = [1,5,2,4]
quickSort(arry)
console.log('911.', arry)
