/**
 take([1, 2, 3]); // => [1]
 take([1, 2, 3], 2); // => [1, 2]
 take([1, 2, 3], 5); // => [1, 2, 3]
 take([1, 2, 3], 0); // => []

 const testErrCase1 = [123, [1, 2, 3], [1, 2, 3], [1, 2, 3]]
 const testErrCase2 = [1, [1], '1', true]

 for (let i = 0; i<4; i++) {
	  try {
	    take(testErrCase1[i], testErrCase2[i])
	  }
	  catch(err) {
	    console.log(err.toString()) // ValidationError: bad value
	  }
	 }
 */

class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

function take(list: number[], num: number = 1): number[] {
    if (!Array.isArray(list) || typeof num !== 'number') {
        throw new ValidationError('bad value');
    }

    return list.slice(0, num);
}

export default take

try {
    throw new ValidationError('123')
} catch (e: any) {
    console.log(e.toString())
}

console.log('911.', take([1, 2, 3]))
console.log('911.', take([1, 2, 3], 2))
console.log('911.', take([1, 2, 3], 5))
console.log('911.', take([1, 2, 3], 0))
