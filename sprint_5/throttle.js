const someCalc = function (a) {
    console.log(a + this.b)
};

function throttle(callback, wait = 1000, context = this) {
    let waiting = false;
    let lastArgs = null;

    return function throttled(...args) {
        if (waiting) {
            lastArgs = args;
            return;
        }

        waiting = true;
        callback.apply(context, args);
        setTimeout(() => {
            waiting = false
            if (lastArgs) {
                throttled.apply(context, lastArgs);
                lastArgs = undefined;
            }
        }, wait);
    };
}

// затормозить функцию до одного раза в 1000 мс
const f1000 = throttle(someCalc, 1000, { b: ' call' });
f1000(1); // выведет 1 call
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)

// когда пройдёт 1000 мс...
// выведет 3 call, промежуточное значение 2 call игнорируется
