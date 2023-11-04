function compress(list: number[]) {
    if(!list.length) {
        return 'undefined'
    }
    // 1. Отсортировать
    // 2. Пройти циклом и собирать строки

    // O(n * log(n)) ~ Суперлинейное
    let sorted = list.sort((a, b) => a - b)

    let start = sorted[0]
    let end = 0
    let result: string[] = []

    // O(n)
    sorted
        .reduce((buffer, currentValue, index, array) => {
            const next = array[++index]

            if(currentValue + 1 !== next) {
                if(buffer.length) {
                    result.push(`${start}-${end}`)
                } else {
                    result.push(currentValue.toString())
                }
                start = next

                buffer = []
                return buffer
            }


            end = next

            buffer.push(currentValue)
            return buffer
    }, [] as number[])


    // O(n)
    return result.join(',')
}

/**
 * Итого:
 * Пространственная = O(n)
 * Асимптотическая = O(n * log(n))
 * */

console.log('911.🚑', compress([1, 4, 5, 2, 3, 9, 8, 11, 0])) // '0-5,8-9,11'
console.log('911.', compress([1, 4, 3, 2])) // '1-4'
console.log('911.', compress([1, 4])) // '1,4'
console.log('911.', compress([])) // undefined

/**
 * Авторское решение:
 * 
 * function compress(list) {
 *     const sortedList = list.sort((a, b) => a - b);
 *     const res = [String(sortedList[0])];
 *     let isInInterval = false;
 *
 *     for (let i = 1; i <= sortedList.length; i++) {
 *       const prevItem = sortedList[i - 1];
 *       const item = sortedList[i];
 *
 *       if (item && item - prevItem === 1) {
 *         isInInterval = true;
 *         continue;
 *       }
 *
 *       if (isInInterval) {
 *         res[res.length - 1] += '-' + prevItem;
 *         isInInterval = false;
 *       }
 *
 *       if (item) {
 *         res.push(String(item));
 *       }
 *     }
 *
 *     return res.join(',');
 * }
 *  */
