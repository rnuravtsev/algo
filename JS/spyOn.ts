export function spyOn (func: any) {
    let counter = 0
    const cacheParams = new Map()

    func.__proto__.callCount = () => {
        return counter
    }

    func.__proto__.wasCalledWith = (val: any) => {
        return Array.from(cacheParams.keys())
            .some(el => el.some((key: any) => key === val))
    }

    func.__proto__.returned = (val: any) => {
        console.log('911 | 🚑', Array.from(cacheParams.values()))
        return Array.from(cacheParams.values())
            .some(el => el === val)
    }

    return (...args: any[]) => {
        cacheParams.set(args, func(...args))

        counter  += 1
        return func(...args)
    }

}
