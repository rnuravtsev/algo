const fizzBuzz = (num) => {
    return [...Array(num).keys()].map((el) => {
            if (el > 0) {
                if (el % 3 === 0 && el % 5 === 0) {
                    return 'fizzbuzz'
                }

                if (el % 5 === 0) {
                    return 'buzz'
                }

                if (el % 3 === 0) {
                    return 'fizz'
                }

            }

            return el
        }
    )
}

console.log('911.', fizzBuzz(6))
