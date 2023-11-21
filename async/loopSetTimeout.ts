let aAsync = false
const fooAsync = () => {
    while (aAsync) {
        console.log('123')
    }
    setTimeout(() => {
        aAsync = true
        fooAsync()
    }, 5000)

    setTimeout(() => {
        aAsync = false
        fooAsync()
    }, 2000)
}

fooAsync()
