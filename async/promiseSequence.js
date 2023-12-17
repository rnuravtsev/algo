function promiseSequence (inputs, promiseMaker) {
    const entries = [...inputs]
    function handleNextInput (outputs) {
        if (entries.length === 0) {
            return outputs;
        } else {
            let nextInput = entries.shift();
            return promiseMaker (nextInput)
                .then(output => outputs.concat(output))
                .then(handleNextInput)
        }

    }

    // Начать с объекта Promise, который удовлетворяется с пустым массивом, //и использовать определенную выше функцию как его обратный вызов,
    return Promise.resolve([]).then(handleNextInput);
}

function fetchBody(url) { return fetch(url) .then(r => r.text()); }
promiseSequence(['https://jsonplaceholder.typicode.com/posts', 'https://jsonplaceholder.typicode.com/comments'], fetchBody).then(bodies => { /* делать что-нибудь с массивом строк */ }).catch(console.error);
