export function sortOddNumbers(arr: any[]) {
    const oddNumbers = arr.filter(num => num % 2 !== 0).sort((a, b) => a - b)
    return arr.map(num => num % 2 !== 0 ? oddNumbers.shift() : num)
}
