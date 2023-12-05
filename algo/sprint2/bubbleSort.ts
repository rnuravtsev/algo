// function bubbleSort(arr: number[]) {
//     let swapped = true
//     while (swapped) {
//         swapped = false
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 swap(arr, i, i + 1)
//                 swapped = true
//             }
//         }
//     }
//
//     return arr;
// }

export const bubbleSort = <T extends number>(arr: T[]) => {
    const n = arr.length

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if(arr[i] < arr[j]) {
                swap(arr, i, j)
            }
        }
    }

    return arr
}

export function swap<T = number>(arr: T[], i: number, j: number) {
    const tmp = arr[i];

    arr[i] = arr[j];
    arr[j] = tmp;
}
