const palindromeStr = 'anna'

// via cycle
const isPalindrome = (str: string) => {
    let left = 0
    let right = str.length - 1
    let result = false

    while(left < right) {
        result = str[left].toLowerCase() === str[right].toLowerCase();

        left += 1
        right -= 1
    }

    return result
}

console.log('911.', isPalindrome(palindromeStr))

// via fp

const isPalindromeFn = (str: string) => {
    const lowerStr = str.toLowerCase()
    return str === lowerStr.split('').reverse().join('')
}

console.log('911.', isPalindromeFn(palindromeStr))
