// Внучку –> ['внучка', 'внучок', ...]
// Машу –> ['маша', 'махать', 'машу', ...]
// ...

const listSen = [
    ['внучка', 'внучок', 'внучки'],
    ['маша', 'махать', 'машу'],
    ['собирает', 'собирать', 'берет', 'забирать']
];

function allSentences(list: string[][]) {
    let combinations = list.reduce((accumulator, current) =>
        accumulator * current.length, 1);

    let leftCombinations = list.reduce((accumulator, current) =>
        accumulator * current.length, 1);
    console.log('911 | 🚑', combinations)
    return function nextSentence() {
        if (leftCombinations === 0) {
            return undefined;
        }
        let sentence = '';
        let helper = 1;
        for (let i = 0; i < list.length; i++) {
            helper *= list[i].length;
            sentence += `${list[i][Math.floor(helper - leftCombinations /
                combinations * helper) % list[i].length]} `;
        }
        leftCombinations--;
        console.log(leftCombinations)
        return sentence.trim();
    }
}

const nextSentence = allSentences(listSen);

for (let i = 0; i < 1 + listSen.reduce((accumulator, current) =>
    accumulator * current.length, 1); i++) {
    console.log(nextSentence());
}


/**
 * Авторское решение
 * @param {string[][]} words
 * @return {() => string | undefined}
 */

// function allSentences(words) {
//     const indexes = words.map(() => 0);
//
//     return function() {
//         if (indexes[0] === words[0].length) {
//             return undefined;
//         };
//
//         const sentence = indexes
//             .map((caseIndex, wordIndex) => words[wordIndex][caseIndex])
//             .join(' ');
//
//         let i = indexes.length - 1;
//         while (i >= 0) {
//             indexes[i]++;
//             if (indexes[i] === words[i].length) {
//                 if (i === 0) {
//                     break;
//                 };
//
//                 indexes[i] = 0;
//                 i--;
//                 continue;
//             }
//             break;
//         }
//
//         return sentence;
//     }
// }
