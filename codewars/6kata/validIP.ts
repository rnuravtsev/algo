export function isValidIP(str: string) {
    return str.split('.').every((el, idx, arr) => {
        if(arr.length !== 4) {
            return false
        }

        if(el.includes(' ') || el.includes('e') || el.includes('\n') || !Number.isInteger(+el)) {
            return false
        }

        if(+el < 0 || +el > 255) {
            return false
        }

        if(el.length > 1 && (el.startsWith('0'))) {
            return false
        }


        return true
    })
}
