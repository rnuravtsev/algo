function unzip(...args: (number[])[]): number[][] {
    const maxLength = args.reduce((result, arg) => {
        if (!Array.isArray(arg)) {
            throw new Error(`${arg} is not array`);
        }

        return Math.max(result, arg.length);
    }, 0);

    // Можно range юзать или просто цикл сразу, чтобы было эффективнее
    return [...Array(maxLength)].map((item, index) => {
        return args.map(arg => arg[index]);
    });
}

export default unzip
