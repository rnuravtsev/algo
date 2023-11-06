type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
    let timer: ReturnType<typeof setTimeout>

    return function(...args) {
        if(timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            fn(...args)
        }, t)
    }
}

const fn = () => console.log('911 | 🚑', 'log')
const debouncedFn = debounce(fn, 300)

const interval = setInterval(debouncedFn, 5)

setTimeout(() => clearInterval(interval), 1000)
