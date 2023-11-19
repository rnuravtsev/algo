const objective = {}
objective.valueOf = () => 1
console.log('911 | 🚑', objective == '1')

const objectFreeze = Object.freeze({})
Object.prototype.valueOf = () => 1

console.log('911 | 🚑', objectFreeze == '1')
