// import { swap } from "./bubbleSort";

// type TreeNode<Value> = {
//     value: Value,
//     left: TreeNode<Value> | null,
//     right: TreeNode<Value> | null
// }
//
// class BinaryHeap<Value> {
//     data: TreeNode<Value>[]
//     head: number
//
//     constructor() {
//         // Массив для хранения данных.
//         this.data = [];
//         this.head = 0
//     }
//
//     private bubbleUp = () => {
//         for (let i = this.data.length - 1; i >= 0; i--) {
//             const child = this.data[i]
//             const parent = this.data[i - 1]
//
//             if (!parent) {
//                 break
//             }
//
//             if (child.value === this.head) return
//
//             if (child.value > parent.value) {
//                 swap(this.data, i, i - 1)
//             }
//         }
//     }
//
//     private sinkDown(node: TreeNode<Value>) {
//         for (let i = 0; i < this.data.length - 1; i++) {
//             const parent = this.data[i]
//             const child = this.data[i++]
//             if(parent.value )
//
//         }
//     }
//
//     // Добавление элемента.
//     insert(node: TreeNode<Value>) {
//         this.data.push(node)
//
//         this.bubbleUp()
//
//         return this.data
//     }
//
//     // Удаление корневого элемента.
//     // Возвращает корневой элемент, если он есть, в противном случае –– undefined.
//     extract() {
//         let root = this.data.at(0)
//         let last = this.data.at(this.data.length - 1)
//         if (root && last) {
//             last.left = root.left
//             last.right = root.right
//             last.value = root.value
//
//             this.sinkDown(root)
//         }
//
//         return root
//     }
// }
//
// const createTreeNode = <Value>(value: Value) => ({
//     value,
//     left: null,
//     right: null
// })
//
// // Tests
// const biHeap = new BinaryHeap<number>()
// console.log('911 | 🚑', biHeap.insert(createTreeNode(3)))
// console.log('911 | 🚑', biHeap.insert(createTreeNode(1)))
// console.log('911 | 🚑', biHeap.insert(createTreeNode(0)))
// console.log('911 | 🚑', biHeap.insert(createTreeNode(7)))
// console.log('911 | 🚑', biHeap.insert(createTreeNode(5)))

export class BinaryHeap<T extends number> {
    data = [] as T[]

    constructor() {
        this.data = [];
    }

    insert(node: any) {
        this.data.push(node);
        this._bubbleUp(this.data.length - 1);
    }

    extract() {
        const root = this.data[0];
        const last = this.data.pop();

        if (this.data.length) {
            // @ts-ignore
            this.data[0] = last;
            this._sinkDown(0);
        }

        return root;
    }

    private _bubbleUp(index: number) {
        const node = this.data[index];
        const parentIndex = Math.floor((index - 1) / 2);
        const parent = this.data[parentIndex];

        if (parentIndex < 0) {
            return;
        }

        if (node > parent) {
            this.data[index] = parent;
            this.data[parentIndex] = node;
            this._bubbleUp(parentIndex);
        }
    }

    _sinkDown(index: number) {
        const node = this.data[index];
        const leftIndex = 2 * index + 1;
        const rightIndex = 2 * index + 2;
        const left = leftIndex < this.data.length ?
            this.data[leftIndex] : -Infinity;
        const right = rightIndex < this.data.length ?
            this.data[rightIndex] : -Infinity;

        if (node < left && left >= right) {
            // @ts-ignore
            this.data[index] = left;
            this.data[leftIndex] = node;
            this._sinkDown(leftIndex);
        } else if (node < right && right >= left) {
            // @ts-ignore
            this.data[index] = right;
            this.data[rightIndex] = node;
            this._sinkDown(rightIndex);
        }
    }
}


/**
 * Авторское решение
 *
 * class BinaryHeap {
 *     constructor() {
 *         this.data = [];
 *     }
 *
 *     insert(node) {
 *         this.data.push(node);
 *         this._bubbleUp(this.data.length - 1);
 *     }
 *
 *     extract() {
 *         const root = this.data[0];
 *         const last = this.data.pop();
 *
 *         if (this.data.length) {
 *             this.data[0] = last;
 *             this._sinkDown(0);
 *         }
 *
 *         return root;
 *     }
 *
 *     _bubbleUp(index) {
 *         const node = this.data[index];
 *         const parentIndex = Math.floor((index - 1) / 2);
 *         const parent = this.data[parentIndex];
 *
 *         if (parentIndex < 0) {
 *             return;
 *         }
 *
 *         if (node > parent) {
 *             this.data[index] = parent;
 *             this.data[parentIndex] = node;
 *             this._bubbleUp(parentIndex);
 *         }
 *     }
 *
 *     _sinkDown(index) {
 *         const node = this.data[index];
 *         const leftIndex = 2 * index + 1;
 *         const rightIndex = 2 * index + 2;
 *         const left = leftIndex < this.data.length ?
 * 					this.data[leftIndex] : -Infinity;
 *         const right = rightIndex < this.data.length ?
 * 					this.data[rightIndex] : -Infinity;
 *
 *         if (node < left && left >= right) {
 *             this.data[index] = left;
 *             this.data[leftIndex] = node;
 *             this._sinkDown(leftIndex);
 *         } else if (node < right && right >= left) {
 *             this.data[index] = right;
 *             this.data[rightIndex] = node;
 *             this._sinkDown(rightIndex);
 *         }
 *     }
 * }
 */
