function incrementString (str: string) {
    const lastDigitsRegEx = /\d+$/ig

    const endDigits = str.match(lastDigitsRegEx)

    if (endDigits) {
        const updatedDigits = (parseInt(endDigits[0], 10) + 1).toString()
        return str.replace(lastDigitsRegEx, updatedDigits.padStart(endDigits[0].length, '0'))
    }

    return `${str}${1}`
}

console.log(incrementString('foo000'))
