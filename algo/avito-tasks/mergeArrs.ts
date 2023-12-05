// O(n * log(n))
// export const mergeArrs = (arr1: number[], arr2: number[]) => {
//     return [...arr1, ...arr2].sort((a, b) => a - b)
// }

// const sampleArr1 = [-2, 3, 3]
// const sampleArr2 = [-5, 0]
// const sampleArr1 = [] as number[]
// const sampleArr2 = [] as number[]
const sampleArr1 = [1, 3] as number[]
const sampleArr2 = [1, 3] as number[]
export const mergeArrs = (arr1: number[], arr2: number[]) => {
    let p1 = 0
    let p2 = 0
    const result = []

    while (p1 + p2 <= (arr1.length + arr2.length) - 1) {
        if (arr1[p1] >= arr2[p2] || p2 > arr2.length) {
            result.push(arr2[p2])
            p2 += 1
        } else {
            result.push(arr1[p1])
            p1 += 1
        }
    }

    return result
}

console.log('911 | 🚑', mergeArrs(sampleArr1, sampleArr2))
