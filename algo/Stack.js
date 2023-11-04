class Stack {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    // Кладёт элемент на стек.
    // Возвращает новый размер стека.
    push(value) {
        const node = {
            value,
            next: null,
            prev: null
        }

        if (this.head === null) {
            this.head = node
            this.tail = this.head
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

        if(this.head !== null) {

            this.tail = this.tail.prev
            this.tail.next = null
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

const myStack = new Stack()

myStack.push(1)
myStack.push(123)
myStack.push(1456)
myStack.pop()

const isMyStackEmpty = myStack.isEmpty()

console.log('911.', myStack.peek())
