const mockRejectedPromise = () => Promise.reject('idk')
const mockFulfilledPromise = () => Promise.resolve('done')

export const requestWithRetry = async <T>(cb: () => Promise<T>, attempts: number) => {
    let counter = 0

    const request = async () => {
        try {
            const response = await cb() as any

            return response
        } catch (e) {
            if (counter > attempts) {
                throw new Error('Попытки закончились')
            }

            counter += 1
            request()

        }
    }

    return await request()
}

requestWithRetry(mockRejectedPromise, 2).then(res => console.log('911 | 🚑', res))

// (async () => {
//     const finalRes = await requestWithRetry(mockFulfilledPromise, 4)
//
//     console.log('911 | 🚑', finalRes)
// })()


