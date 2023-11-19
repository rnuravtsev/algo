export const requestWithMaxTimeout = <T>(request: Promise<T>, timeout: number): Promise<T> => {
    const rejected = new Promise<T>((res, rej) => {
        setTimeout(() => {
            rej('Time is Over')
        }, timeout)
    })

    return Promise.race([
        request,
        rejected
    ])
}


const onResolve = (result: any) => console.log('911 | 🚑', result)
const onReject = (err: any) => console.log('911 | 🚑', err)
const mockedDelay = new Promise<string>((res) => setTimeout(() => res('dfdf'), 4000))

requestWithMaxTimeout(mockedDelay, 10000).then(onResolve, onReject)
