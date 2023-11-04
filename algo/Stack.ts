export type ListNode<Value> = {
    value: Value,
    next: ListNode<Value> | null
    prev: ListNode<Value> | null
}

class Stack<Value> {
    size: number
    head: ListNode<Value> | null
    tail: ListNode<Value> | null

    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    // Кладёт элемент на стек.
    // Возвращает новый размер стека.
    push(value: Value) {
        const node: ListNode<Value> = {
            value,
            next: null,
            prev: null
        }

        if (this.head === null) {
            this.head = this.tail = node
        } else {
            node.prev = this.tail

            if (this.tail) this.tail.next = node

            this.tail = node

        }

        this.size += 1
    }

    // Убирает элемент со стека.
    // Если стек пустой, кидает ошибку.
    // Возвращает удалённый элемент.
    pop() {
        if(this.size === 0) {
            throw new Error('Stack is empty')
        }

        const result = {
            ...this.tail
        }

        if(this.head !== null && this.tail !== null) {

            this.tail = this.tail.prev
            if(this.tail) this.tail.next = null
        }

        this.size -= 1

        return result
    }

    // Возвращает верхний элемент стека без его удаления.
    peek() {
        return this.tail
    }

    // Если стек пуст, возвращает true. В противном случае –– false.
    isEmpty() {
        return !this.size
    }
}

const myStack = new Stack<number>()

myStack.push(1)

const isMyStackEmpty = myStack.isEmpty()

console.log('911.', myStack.peek())


// Авторское решение
/*class Stack {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    push(value) {
        const node = { value, next: null, prev: null };

        node.prev = this.tail;

        if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = this.tail = node;
        }

        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Не могу удалить из пустого стека');
        }

        const node = this.tail;
        const prevNode = node.prev;

        if (prevNode) {
            node.prev = null;
            prevNode.next = null;
        }

        this.tail = prevNode;

        if (this.head === node) {
            this.head = prevNode;
        }

        this.size--;

        return node;
    }

    peek() {
        return this.tail;
    }

    isEmpty() {
        return this.tail === null;
    }
}*/
