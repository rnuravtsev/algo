// type NumberArr = number[]
// export const insertionSort = (arr: number[]) => {
//     for(let i = 1; i < arr.length; i++) {
//         const insertionIndex = getInsertionIndex(arr, i);
//         moveElements(arr, insertionIndex, i)
//     }
//
//     return arr
// }
//
// const getInsertionIndex = (arr: NumberArr, i: number) => {
//     for (let j = i - 1; j >= 0; j--) {
//         if(arr[j] < arr[i]) {
//             return j + 1
//         }
//     }
//     return 0
// }
//
// const moveElements = (arr: NumberArr, insertionIndex: number, i: number) => {
//     const value = arr[i]
//     for (let k = i; k > insertionIndex; k--) {
//         arr[k] = arr[k - 1]
//     }
//
//     arr[insertionIndex] = value
// }
//
//


import { swap } from "./bubbleSort";

// export const insertionSort = <T extends number>(arr: T[]) => {
//     // let wall = 1
//     // let next = 2
//
//     const comparePartOfArr = (wall: number) => {
//         let current = arr[wall]
//         let i = wall - 1
//
//         while (i >= 0 && arr[i] > current) {
//             arr[i + 1] = arr[i]
//             i--
//         }
//     }
//
//     for (let wall = 1; wall <= arr.length - 1; wall++) {
//             comparePartOfArr(wall)
//     }
//
//     return arr
// }
//
// insertionSort([7,1,3])

const comparePartOfArr = (arr: number[], wall: number) => {
    let current = arr[wall];
    let prev = wall - 1;
    while (prev >= 0 && arr[prev] > current) {
        arr[prev + 1] = arr[prev]; // Смещаем элемент вправо
        prev--;
    }
    arr[prev + 1] = current; // Вставляем элемент на правильное место
}

export const insertionSort = <T extends number>(arr: T[]) => {
    for (let wall = 1; wall < arr.length; wall++) {
        comparePartOfArr(arr, wall);
    }
    return arr;
}
