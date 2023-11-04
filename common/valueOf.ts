function glob(this: any) {
    let b = '555';

    const fnThis = this

    return {
        i: 0,
        a: 'a100',
        valueOf(fff?: any): any {
            return `${fnThis.b} ${fff}`;
        }
    }

}

console.log(glob().valueOf())
//
// //@ts-ignore
// console.log(a == 1)
// //@ts-ignore
// console.log(a == 1)
