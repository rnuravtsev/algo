type StepFn = (val: number) => number | StepFn;

function add(val: number): number | StepFn {
    if (!val) {
        return 0
    }

    return function inner(...args: number[]) {
        if (args.length === 0) {
            inner.valueOf = function () {
                return val
            }
        }

        const result = args.reduce((prev, cur) => prev + cur, val)

        return add(result)
    }
}

//@ts-ignore
console.log('911.', add(1)(2)(3)(4))
