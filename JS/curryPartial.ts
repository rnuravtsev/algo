type CurryPartialFn<Value = unknown> = (fn: (...params: any) => Value, ...args: any[]) => Value

export const curryPartial: CurryPartialFn = (fn, ...args) =>
    args.length >= fn.length
        ? fn(...args)
        : (...params: any[]) => curryPartial(fn, ...args, ...params)
