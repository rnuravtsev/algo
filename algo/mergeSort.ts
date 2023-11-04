function mergeSort(arr: number[], start = 0, end = arr.length - 1, buffer: number[] = []) {
    if(end <= start) return

    const mid = Math.floor((start + end) / 2);

    mergeSort(arr, start, mid, buffer);
    mergeSort(arr, mid + 1, end, buffer);
    merge(arr, buffer, start, mid, end);

    return arr;
}

function merge(arr: number[], buffer: number[], start: number, mid: number, end: number) {
    for (let i = start; i <= end; i++) {
        buffer[i] = arr[i];
    }

    let l = start;
    let r = mid + 1;
    let i = start;

    while (l < mid + 1 && r < end + 1) {
        if (buffer[l] <= buffer[r]) {
            arr[i] = buffer[l];
            l++
        } else {
            arr[i] = buffer[r];
            r++
        }
        i++;
    }

    while (l < mid + 1) {
        arr[i] = buffer[l];
        l++;
        i++;
    }

    while (r < end + 1) {
        arr[i] = buffer[r];
        r++;
        i++;
    }
}

console.log('911.', mergeSort([5,3,2,4]))
