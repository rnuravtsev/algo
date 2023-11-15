const obj = { x: 15 };


function first() {
    // @ts-ignore
    return this.x; // 15
}


function second() {
    // @ts-ignore
    return first.bind(obj)()
    // return first.apply(obj); // Вернёт undefined, а нужно 15
    // return first.call(obj); // Вернёт undefined, а нужно 15
}

console.log('911 | 🚑', second())

