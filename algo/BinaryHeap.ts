import { swap } from "./bubbleSort";

type TreeNode<Value> = {
    value: Value,
    left: TreeNode<Value> | null,
    right: TreeNode<Value> | null
}

class BinaryHeap<Value> {
    data: TreeNode<Value>[]
    head: number

    constructor() {
        // Массив для хранения данных.
        this.data = [];
        this.head = 0
    }

    private bubbleUp = () => {
        for (let i = this.data.length - 1; i >= 0; i--) {
            const child = this.data[i]
            const parent = this.data[i - 1]

            if (!parent) {
                break
            }

            if (child.value === this.head) return

            if (child.value > parent.value) {
                swap(this.data, i, i - 1)
            }
        }
    }

    private sinkDown(node: TreeNode<Value>) {
        for (let i = 0; i < this.data.length - 1; i++) {
            const parent = this.data[i]
            const child = this.data[i++]
            if(parent.value )

        }
    }

    // Добавление элемента.
    insert(node: TreeNode<Value>) {
        this.data.push(node)

        this.bubbleUp()

        return this.data
    }

    // Удаление корневого элемента.
    // Возвращает корневой элемент, если он есть, в противном случае –– undefined.
    extract() {
        let root = this.data.at(0)
        let last = this.data.at(this.data.length - 1)
        if (root && last) {
            last.left = root.left
            last.right = root.right
            last.value = root.value

            this.sinkDown(root)
        }

        return root
    }
}

const createTreeNode = <Value>(value: Value) => ({
    value,
    left: null,
    right: null
})

// Tests
const biHeap = new BinaryHeap<number>()
console.log('911 | 🚑', biHeap.insert(createTreeNode(3)))
console.log('911 | 🚑', biHeap.insert(createTreeNode(1)))
console.log('911 | 🚑', biHeap.insert(createTreeNode(0)))
console.log('911 | 🚑', biHeap.insert(createTreeNode(7)))
console.log('911 | 🚑', biHeap.insert(createTreeNode(5)))
