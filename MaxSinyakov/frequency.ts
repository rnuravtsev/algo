const arr =         ["z", "mn", "x", "constructor", "ab", "x", "x", "constructor", "mn", "ab", "qwe"];

// sortByFreq(arr) === ["x", "x", "x", "ab", "ab", "constructor", "constructor", "mn", "mn", "qwe", "z"];


const sortByFreq = (arr) => {
    /*
    const entries = Object.entries(arr.reduce((acc, cur) => {
        if(!acc[cur]) {
            acc[cur] = 0
        }
        acc[cur] += 1

        return acc
    }, Object.create(null)))
    */

    const map = Object.create(null);
    
    for(const cur of arr) {
        map[cur] ??= 0;
        map[cur] += 1;
    }

    return arr.toSorted((a, b) => map[b] - map[a] || a.localeCompare(b));

    // return Object.entries(map)
    //     .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    //     .flatMap(([value, freq]) => Array(freq).fill(value));
    //
    // const groups = Object.groupBy(arr, x => x);
    // return Object.values(groups) // [["x", "x", "x"], ["a"], ["z", "z"]]
    //     .sort((a, b) => b.length - a.length || a[0].localeCompare(b[0]))
    //     .flat();


    /*
    entries.sort((a, b) => {
        if(b[1] < a[1]) {
            return -1
        }

        if(a[1] > b[1]) {
            return 1
        }

        if(a[0] > b[0]) {
            return 1
        }

         if(a[0] < b[0]) {
            return -1
        }

         if(a[0] === b[0]) {
            return 0
        }
    })
    */


    /*
    const result = []

    for(let [key, value] of entries) {
        for(let i = 0; i < value; i++) {
            result.push(key)
        }
    }

    return result
    */
}

sortByFreq(arr);


const double = x => x * 2;
const cube = x => x ** 3;
const plusOne = x => x + 1;

const fn = compose(double, cube, plusOne);
// fn = x => double(cube(plusOne(x)))
fn(4); // (4 + 1)³ × 2 = 250

const compose = (...fns) => {
    return function(value) {
        return fns.reduceRight((acc, fn) => fn(acc), value)
    }
}
