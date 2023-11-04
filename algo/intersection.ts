/**
 * Даны два отсортированных списка с временными интервалами, когда пользователи были в сети.
 * Начало интервала строго меньше конца.
 * Напишите функцию, которая находит интервалы, когда оба пользователя были онлайн.
 */

type TimeTuple = [number, number]

function intersection(user1: TimeTuple[], user2: TimeTuple[]) {
    const result: TimeTuple[] = []
    let i = 0;
    let j = 0;

    while(i < user1.length && j < user2.length) {
        const [start1, end1] = user1[i];
        const [start2, end2] = user2[j];

        const overlapStart = Math.max(start1, start2)
        const overlapEnd = Math.min(end1, end2)

        if(overlapStart <= overlapEnd) {
            result.push([overlapStart, overlapEnd])
        }

        if(end1 < end2) {
            i++
        } else {
            j++
        }
    }

    return result
}

console.log('911.', intersection(
    [[8, 12], [17, 22]],
    [[5, 11], [14, 18], [20, 23]]
)) // [[8, 11], [17, 18], [20, 22]]

console.log('911.', intersection(
    [[9, 15], [18, 21]],
    [[10, 14], [21, 22]]
)) // [[10, 14]]

// Авторское решение
// function intersection(user1, user2) {
//     const list = [];
//     let i1 = 0;
//     let i2 = 0;
//
//     while (i1 < user1.length && i2 < user2.length) {
//         const leftOffset = Math.max(user1[i1][0], user2[i2][0]);
//         const rightOffset = Math.min(user1[i1][1], user2[i2][1]);
//
//         if (rightOffset > leftOffset) {
//             list.push([leftOffset, rightOffset]);
//         }
//
//         user1[i1][1] < user2[i2][1] ? ++i1 : ++i2;
//     }
//
//     return list;
// }
