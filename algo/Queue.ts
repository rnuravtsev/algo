import { ListNode } from "./Stack";

class Queue<Value> {
    size: number
    head: ListNode<Value> | null
    tail: ListNode<Value> | null

    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    // Ставит элемент в очередь.
    // Возвращает новый размер очереди.
    enqueue(value: Value) {
        const node: ListNode<Value> = {
            value,
            next: null,
            prev: null
        }

        if (this.tail === null) {
            this.head = this.tail = node
        } else {
            node.prev = this.tail

            this.tail.next = node
            this.tail = node

        }

        this.size++
    }

    // Убирает элемент из очереди.
    // Если очередь пустая, кидает ошибку.
    // Возвращает удалённый элемент.
    dequeue() {
        if (this.size === 0) throw new Error('Queue is empty')

        const result = { ...this.head }

        if (this.head) {
            this.head = this.head.next
            if(this.head?.prev) this.head.prev = null
        }

        this.size--

        return result
    }

    // Возвращает элемент в начале очереди.
    peek() {
        return this.head
    }

    // Если очередь пустая, возвращает true. В противном случае –– false.
    isEmpty() {
        return this.size === 0
    }
}

const myQueue = new Queue()

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.dequeue();

console.log('911.', myQueue.peek())

// Авторское решение
/*
class Queue {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    enqueue(value) {
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

    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Не могу удалить из пустой очереди');
        }

        const node = this.head;
        const nextNode = node.next;

        if (nextNode) {
            node.next = null;
            nextNode.prev = null;
        }

        this.head = nextNode;

        if (this.tail === node) {
            this.tail = nextNode;
        }

        this.size--;

        return node;
    }

    peek() {
        return this.head;
    }

    isEmpty() {
        return this.head === null;
    }
}
*/
