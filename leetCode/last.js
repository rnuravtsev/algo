Array.prototype.map = function (callback) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i))
    }

    return result
}

console.log(Array.prototype)
