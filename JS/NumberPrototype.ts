// (2).plus(3).minus(1) // 4
// @ts-ignore
Number.prototype.plus = function (number) {
// @ts-ignore
    console.log('911 | 🚑', this)
    number
// @ts-ignore
    return this
}

2..plus(3)

// Number.prototype.minus = function (number) {
//     number
//     return this
// }
