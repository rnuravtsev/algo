// type StepFn = (val: number) => number | StepFn;
//
// function add(val: number): number | StepFn {
//     if (!val) {
//         return 0
//     }
//
//     return function inner(...args: number[]) {
//         if (args.length === 0) {
//             inner.valueOf = function () {
//                 return val
//             }
//         }
//
//         const result = args.reduce((prev, cur) => prev + cur, val)
//
//         return add(result)
//     }
// }
//
// const add2 = (a: number) => {
//     const sum = (b: number) => {
//         return add2(a + b)
//     }
//
//     sum.valueOf = () => {
//         return a
//     }
//
//     return sum
// }
//
// var add3 = function (orig: number) {
//     var inner = function (val: number) {
//         return add3(parseInt(val+'', 10) == val ? orig+val : orig);
//     };
//     inner.valueOf = function () {return orig;};
//
//     return inner;
// };
//
// //@ts-ignore
// console.log('911.', add2(1)(2)(3))


// напиши функцию curry, чтобы при add4(1)(2)(3)() = 6

const add4 = (a: number) => {
    let sum = a
    const plus = (b?: number) => {
        if (b) {
            sum += b
            return plus
        }
        return sum
    }

    plus.valueOf = () => {
        return sum
    }

    return plus
}

// @ts-ignore
console.log(add4(1)(2)(3)(5)(7)(9) == 27)
