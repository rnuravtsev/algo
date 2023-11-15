const badResult = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(function() {
            console.log(i);
        }, 10);
    }
};

const iifeSolution = () => {
    for (var i = 0; i < 10; i++) {
        ((num) => setTimeout(function() {
            console.log(num);
        }, 10))(i)
    }
};

function es6Solution() {
    for (let i = 0; i < 10; i++) {
        setTimeout(function() {
            console.log(i);
        }, 10);
    }
}

const bindSolution = function () {
    const cb = function(n) {console.log(n)}

    for (var i = 0; i < 10; i++) {
        const bindedCb = cb.bind(null, i)
        setTimeout(bindedCb, 10);
    }
};

// iifeSolution()
// es6Solution()
bindSolution()
// badResult()
