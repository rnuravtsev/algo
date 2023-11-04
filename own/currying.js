function add(n){
    // Let the currying begin!
    let result = n;

    return function wrapper(arg) {
        if (!wrapper.arguments.length) {
            return result
        }

        result += arg
        return add(result)
    }
}

console.log(add(2)(3)(5)());
