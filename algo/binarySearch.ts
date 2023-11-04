const arr = [1, 3, 4, 9, 12, 22]

const binarySearch = (list: number[], value: number) => {
    let left = 0
    let right = list.length - 1
    let position = -1

    while(left <= right) {
        let mid = Math.floor((left + right) / 2)

        if(list[mid] === value) {
            position = mid
        }

        if(list[mid] < value) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return position
}

console.log('911.', binarySearch(arr, 22))
