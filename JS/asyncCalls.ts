type Cb = (str: unknown) => void

function foo(callback: Cb) {
    setTimeout(function() {
        callback('A');
    }, Math.random()*100);
}

function bar(callback: Cb) {
    setTimeout(function() {
        callback('B');
    }, Math.random()*100);
}

function baz(callback: Cb) {
    setTimeout(function() {
        callback('C');
    }, Math.random()*100);
}

// Оборачиваем foo, bar и baz в промисы
function fooPromise() {
    return new Promise((resolve) => {
        foo(resolve);
    });
}

function barPromise() {
    return new Promise((resolve) => {
        bar(resolve);
    });
}

function bazPromise() {
    return new Promise((resolve) => {
        baz(resolve);
    });
}

// Выполняем функции последовательно
fooPromise()
    .then((result) => {
        console.log(result); // Выводит 'A'
        return barPromise();
    })
    .then((result) => {
        console.log(result); // Выводит 'B'
        return bazPromise();
    })
    .then((result) => {
        console.log(result); // Выводит 'C'
    });
