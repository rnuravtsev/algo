const delay = (timeout: number) => new Promise(resolve => setTimeout(resolve, timeout));

const promises = [
    delay(65).then(() => 10),
    delay(100).then(() => {
        throw 'my error';
    })
];

type AllSettledResult = {
    status: string,
    value: unknown
} | {
    status: string,
    reason: string
}

// @ts-ignore
function allSettled<T>(promises: Promise<T>[]) {
    const wrapper = (promise: Promise<T>) => {
        promise
            .then(value => ({status: 'resolved', value}))
            .catch(e => ({status: 'rejected', reason: e}))
    }

    return Promise.all(promises.map(wrapper))
}

console.log('911 | 🚑', allSettled(promises))
