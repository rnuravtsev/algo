function someCalc(this: any, a: any) {
    console.log(a + this.b)
}

// function throttle<T extends (...args: any[]) => any>(
//     callback: T,
//     wait: number,
//     context?: any
// ) {
//     let isThrottled = false;
//     let lastArgs: Parameters<T> | undefined;
//
//     function throttled(this: ThisParameterType<T>, ...args: Parameters<T>) {
//         const ctx = context || this;
//         if (isThrottled) {
//             lastArgs = args;
//             return;
//         }
//
//         isThrottled = true;
//         callback.apply(ctx, args);
//         setTimeout(() => {
//             isThrottled = false;
//             if (lastArgs) {
//                 throttled.apply(ctx, lastArgs);
//                 lastArgs = undefined;
//             }
//         }, wait);
//     }
//
//     return throttled as (...args: Parameters<T>) => ReturnType<T>;
// }

const throttle = <T extends (...args: unknown[]) => unknown>(
    cb: T,
    delay: number,
    context?: any
) => {
    let shouldFire = true
    // let lastArgs: Parameters<T> | undefined

    function throttled(this: ThisParameterType<T>, ...args: any[]) {
        const ctx = context || this
        if (shouldFire) {
            cb.apply(ctx, args)
        }

        shouldFire = false

        setTimeout(() => {
            shouldFire = true
            // if (lastArgs) {
            //     throttled.apply(ctx, lastArgs)
            //     lastArgs = undefined
            // }
        }, delay)
    }

    return throttled
}

// затормозить функцию до одного раза в 1000 мс
const f1000 = throttle(someCalc, 1000, { b: ' call' });
f1000(1); // выведет 1 call
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)

setInterval(() => f1000(8), 200)
setInterval(() => f1000(9), 300)

// когда пройдёт 1000 мс...
// выведет 3 call, промежуточное значение 2 call игнорируется
