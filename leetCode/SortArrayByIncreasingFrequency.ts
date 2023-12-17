function frequencySort(nums: number[]): number[] {
    const frequency: Record<string, number> = Object.create(null)
    for(const num of nums) {
        frequency[num] ??= 0
        frequency[num] += 1
    }

    return Object.entries(frequency)
        .sort((a, b) => a[1] - b[1] || (+b[0]) - (+a[0]))
        .flatMap(([value, freq]) => Array(freq).fill(+value))
}

console.log('911 | 🚑', frequencySort([1,1,2,2,2,3]))
