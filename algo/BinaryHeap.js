class BinaryHeap {
    constructor() {
        // Массив для хранения данных.
        this.data = [];
    }

    // Добавление элемента.
    insert(element) {
        this.data.push(element);
        let index = this.data.length - 1;
        const current = this.data[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.data[parentIndex];

            if (parent <= current) {
                this.data[parentIndex] = current;
                this.data[index] = parent;
                index = parentIndex;
            } else break;
        }
    }

    // Удаление корневого элемента.
    // Возвращает корневой элемент, если он есть, в противном случае –– undefined.
    extract() {
        if(this.data.length <= 1) return this.data.pop()
        const max = this.data[0];
        const end = this.data.pop();
        this.data[0] = end;

        let index = 0;
        const length = this.data.length;
        const current = this.data[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.data[leftChildIndex];
                if (leftChild > current) swap = leftChildIndex;
            }
            if (rightChildIndex < length) {
                rightChild = this.data[rightChildIndex];
                if (
                    (swap === null && rightChild > current) ||
                    (swap !== null && rightChild > leftChild)
                )
                    swap = rightChildIndex;
            }

            if (swap === null) break;
            this.data[index] = this.data[swap];
            this.data[swap] = current;
            index = swap;
        }

        return max;
    }
}

// function swap(arr, current, prev) {
//     const temp = arr[prev]
//
//     arr[prev] = arr[current]
//     arr[current] = temp
// }
//
// class BinaryHeap {
//     constructor() {
//         // Массив для хранения данных.
//         this.data = [];
//     }
//
//     _bubbleUp = (currentIndex, headIndex) => {
//         if (this.data[currentIndex] <= this.data[headIndex]) {
//             return
//         }
//
//         if (headIndex >= 0) {
//             swap(this.data, currentIndex, headIndex)
//             this._bubbleUp(headIndex, Math.floor((headIndex - 1) / 2))
//         }
//     }
//
//     _sinkDown = (currentIndex = 0) => {
//         const currentValue = this.data.at(currentIndex)
//         const leftChildIndex = (currentIndex * 2) + 1
//         const rightChildIndex = (currentIndex * 2) + 2
//         const leftChild = this.data.at(leftChildIndex)
//         const rightChild = this.data.at(rightChildIndex)
//
//         if (leftChild > currentValue || rightChild > currentValue) {
//             if ((currentValue < leftChild) && (currentValue < rightChild)) {
//                 if (leftChild > rightChild) {
//                     swap(this.data, currentIndex, leftChildIndex)
//                     this._sinkDown((currentIndex * 2) + 1)
//
//                     return
//                 } else {
//                     swap(this.data, currentIndex, rightChildIndex)
//                     this._sinkDown((currentIndex * 2) + 2)
//
//                     return;
//                 }
//
//             }
//
//             if (currentValue < leftChild) {
//                 swap(this.data, currentIndex, leftChildIndex)
//
//                 this._sinkDown((currentIndex * 2) + 1)
//             }
//
//             if (currentValue < rightChild) {
//                 swap(this.data, currentIndex, rightChildIndex)
//
//                 this._sinkDown((currentIndex * 2) + 1)
//             }
//         }
//     }
//
//     // Добавление элемента.
//     insert(node) {
//         this.data.push(node)
//
//         if (this.data.length < 2) return
//
//         const headIndex = Math.floor((this.data.length - 2) / 2)
//
//         this._bubbleUp(this.data.length - 1, headIndex)
//     }
//
//     // Удаление корневого элемента.
//     // Возвращает корневой элемент, если он есть, в противном случае –– undefined.
//     extract() {
//         if (!this.data.length) {
//             return undefined
//         }
//
//         const head = this.data.at(0)
//         this.data[0] = undefined
//
//
//         if (this.data.length > 1) {
//             swap(this.data, 0, this.data.length - 1)
//             delete this.data[this.data.length - 1]
//             this._sinkDown()
//         }
//
//         return head
//     }
// }

// Пример использования
const heap = new BinaryHeap();
heap.insert(94);
heap.insert(76);
heap.insert(1000);
// heap.insert(999);
// heap.insert(100);
// heap.insert(23);
// heap.insert(2000);
// heap.insert(1);
// heap.insert(5);

console.log('911 | 🚑 | extract()', heap.extract())

console.log('911 | 🚑 | data: ', heap.data)

// console.log(heap.extract()); // Выведет 1
// console.log(heap.extract()); // Выведет 2
// console.log(heap.extract()); // Выведет 5
