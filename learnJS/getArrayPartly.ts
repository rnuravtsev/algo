let urls = [
    'user.json',
    'guest.json'
];

let chain = Promise.resolve()
let resultsOfChain: any[] = []

urls.forEach(url => {
    // @ts-ignore
    chain = chain
        .then(() => url)
        .then(result => {
            resultsOfChain.push(result);
        })

})

chain.then(() => console.log(resultsOfChain))
