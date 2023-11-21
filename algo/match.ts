function match(S: string) {
    let N = S.length;
    let A = Array.from({ length: N + 1 }, (_, k) => k);
    let result = [];

    for (let i = 0; i < N; i++) {
        if (S[i] === 'I') {
            // Взять наименьшее доступное число
            result.push(A.shift());
        } else if (S[i] === 'D') {
            // Взять наибольшее доступное число
            result.push(A.pop());
        }
    }

    // Добавляем последнее оставшееся число
    result.push(A[0]);

    return result;
}

console.log('911 | 🚑', match('III')) // [0,1,2,3]
console.log('911 | 🚑', match('DDI')) // [3,2,0,1]
console.log('911 | 🚑', match('IDID')) // [0,4,1,3,2]

/**
 * Авторское решение
 */

// function match(str) {
//     const result = [];
//
//     let i = 0;
//     let max = str.length;
//     let min = 0;
//
//     while (result.length <= str.length) {
//         if (str[i] === "I") {
//             result.push(min);
//             min += 1;
//         }
//         else if (str[i] === "D") {
//             result.push(max);
//             max -= 1;
//         } else {
//             result.push(min);
//         }
//
//         i++;
//     }
//
//     return result;
// };
