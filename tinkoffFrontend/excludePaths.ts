const alice = {
    name: 'Alice',
    age: 20,
    track: {
        title: 'Frontend',
        score: 100
    }
};

const excludePath = (obj: Record<string, unknown>, path: string[], index: number) => {
    if(index + 1 === path.length) {
        delete obj[path[index]]
        return
    }

    if(path[index] in obj) {
        // @ts-ignore
        excludePath(obj[path[index]], path, index + 1)
    }
}

const excludePaths = <T = Record<string, unknown>>(obj: T, paths: string[]): T => {
    const copy = JSON.parse(JSON.stringify(obj));
    paths.forEach(path => {
        const split = path.split('.')

        excludePath(copy, split, 0)
    })

    return copy
}


const newObj = excludePaths(alice, ['age', 'track.score']);

console.log('911 | 🚑', newObj)
