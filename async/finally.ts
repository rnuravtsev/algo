Promise.prototype.finally = function (fn) {
    return this.then(
        (value) => Promise.resolve(fn()).then(() => value),
        (reason) => Promise.resolve(fn()).then(() => {
            throw new Error(reason)
        })
    )
}
