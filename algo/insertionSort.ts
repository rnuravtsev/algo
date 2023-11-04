type NumberArr = number[]
const insertionSort = (arr: number[]) => {
    for(let i = 1; i < arr.length; i++) {
        const insertionIndex = getInsertionIndex(arr, i);
        moveElements(arr, insertionIndex, i)
    }

    return arr
}

const getInsertionIndex = (arr: NumberArr, i: number) => {
    for (let j = i - 1; j >= 0; j--) {
        if(arr[j] < arr[i]) {
            return j + 1
        }
    }
    return 0
}

const moveElements = (arr: NumberArr, insertionIndex: number, i: number) => {
    const value = arr[i]
    for (let k = i; k > insertionIndex; k--) {
        arr[k] = arr[k - 1]
    }

    arr[insertionIndex] = value
}


console.log('911.', insertionSort([1,7,5,3]))
