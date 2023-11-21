const delayLearnJS = (timer: number, cb?: () => unknown): Promise<unknown> => {
    return new Promise<unknown>(resolve => {
        setTimeout(() => resolve(cb?.()), timer)
    })
}

delayLearnJS(3000)
        .then(() => console.log("Hello!"))
