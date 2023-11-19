// function smallestUniqueSubstr(str: string) {
//     // your code here
//     const result = []
//
//     str.split('').sort((a, b) => {
//         (a.charCodeAt())
//     })
//
//     for(let i = 0; i <= str.length - 1; i++) {
//         const current = str[i]
//         const next = str[i + 1]
//
//         if(current !== next) {
//             result.push(str[i])
//         }
//     }
//
//     return result.join('')
// }
//
// console.log('911 | 🚑', smallestUniqueSubstr('a'))


// @ts-ignore
[1,2,3].reduce((a,b) => {
    console.log(a,b)
});

// @ts-ignore
[1,2,3].reduce((a,b) => {
    console.log(a,b)
}, 0)
