const canGetCount = (n: number) => {
    return () => {
        return --n >= 0 ? 'yes': 'no'
    }
}

const myAwesomeCounter = canGetCount(4)

console.log('911 | 🚑', myAwesomeCounter())
console.log('911 | 🚑', myAwesomeCounter())
console.log('911 | 🚑', myAwesomeCounter())
console.log('911 | 🚑', myAwesomeCounter())
console.log('911 | 🚑', myAwesomeCounter())
console.log('911 | 🚑', myAwesomeCounter())
console.log('911 | 🚑', myAwesomeCounter())
console.log('911 | 🚑', myAwesomeCounter())
console.log('911 | 🚑', myAwesomeCounter())
console.log('911 | 🚑', myAwesomeCounter())
