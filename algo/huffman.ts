class PriorityQueue {
    constructor() {
        this.nodes = [];
        this.priority = new Map();
    }

    push(node, priority) {
        if (!this.priority.has(node)) {
            this.nodes.push(node);
        }
        this.priority.set(node, priority);
        this.nodes.sort((a, b) => this.priority.get(b) - this.priority.get(a));
    }

    pop() {
        if (!this.nodes.length) {
            return undefined;
        }
        const node = this.nodes.pop();
        const priority = this.priority.get(node);
        return [node, priority];
    }

    get size() {
        return this.nodes.length;
    }
}

function getRates(str) {
    const rates = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!rates[char]) {
            rates[char] = 0;
        }
        rates[char]++;
    }

    return rates;
}

function buildQueue(rates) {
    const queue = new PriorityQueue();

    Object.keys(rates).forEach(key => {
        queue.push({ value: key, left: null, right: null }, rates[key]);
    });

    return queue;
}

function getCodes(node, codes = {}, code = '') {
    if (!node.left && !node.right) {
        codes[node.value] = code;
        return codes;
    }

    if (node.left) {
        getCodes(node.left, codes, code + '0');
    }
    if (node.right) {
        getCodes(node.right, codes, code + '1');
    }

    return codes;
}

function getEncodedStr(str, codes) {
    let encodedStr = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        encodedStr += codes[char];
    }

    return encodedStr;
}

function huffman(str) {
    const rates = getRates(str);
    const queue = buildQueue(rates);

    while (queue.size > 1) {
        const [rightNode, rightPriority] = queue.pop();
        const [leftNode, leftPriority] = queue.pop();

        const newNode = { left: leftNode, right: rightNode };
        const newPriority = rightPriority + leftPriority;
        queue.push(newNode, newPriority);
    }

    const [rootNode] = queue.pop();
    const codes = getCodes(rootNode);
    const encodedStr = getEncodedStr(str, codes);

    return { codes, encodedStr };
}

// Пример использования
const result = huffman("your string here");
console.log(result);

/**
 * Авторское решение
 */

// function huffman(str) {
//     const rates = getRates(str);
//     const queue = buildQueue(rates);
//
//     while(queue.size > 1) {
//         const [ rightNode, rightPriority ] = queue.pop();
//         const [ leftNode, leftPriority ] = queue.pop();
//
//         const newNode = { left: leftNode, right: rightNode };
//         const newPriority = rightPriority + leftPriority;
//
//         queue.push(newNode, newPriority);
//     }
//
//     const [ rootNode ] = queue.pop();
//     const codes = getCodes(rootNode);
//     const encodedStr = getEncodedStr(str, codes);
//
//     return { codes, encodedStr };
// }
//
// function getRates(str) {
//     const rate = {};
//
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//
//         rate[char] = rate[char] || 0;
//         rate[char]++;
//     }
//
//     return rate;
// }
//
// function buildQueue(rates) {
//     const queue = new PirorityQueue();
//
//     Object.keys(rates).forEach(key => {
//         queue.push({ value: key, left: null, right: null }, rates[key]);
//     });
//
//     return queue;
// }
//
// function getCodes(node, codes = {}, code = '') {
//     if (!node.left && !node.right) {
//         codes[node.value] = code;
//     } else {
//         getCodes(node.left, codes, code + '1');
//         getCodes(node.right, codes, code + '0');
//     }
//
//     return codes;
// }
//
// function getEncodedStr(str, codes) {
//     let encodedStr = '';
//
//     for (let i = 0; i < str.length; i++) {
//         encodedStr += codes[str[i]];
//     }
//
//     return encodedStr;
// }
//
// class PirorityQueue {
//     constructor() {
//         this.nodes = [];
//         this.priority = new Map();
//     }
//
//     push(node, priority) {
//         if (!this.priority.has(node)) {
//             this.nodes.push(node);
//         }
//
//         this.priority.set(node, priority);
//         this.nodes.sort((a, b) => this.priority.get(b) - this.priority.get(a));
//     }
//
//     pop() {
//         if (!this.nodes.length) {
//             return undefined;
//         }
//
//         const node = this.nodes.pop();
//         const priority = this.priority.get(node);
//
//         return [ node, priority ];
//     }
//
//     get size() {
//         return this.nodes.length;
//     }
// }
