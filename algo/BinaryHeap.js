// class BinaryHeap {
//     constructor() {
//         // Массив для хранения данных.
//         this.data = [];
//     }
//
//     // Добавление элемента.
//     insert(node) {
//         this.data.push(node);
//         this.bubbleUp(this.data.length - 1);
//     }
//
//     // Вспомогательная функция для перемещения элемента вверх по куче.
//     bubbleUp(index) {
//         while (index > 0) {
//             const parentIndex = Math.floor((index - 1) / 2);
//             if (this.data[index] >= this.data[parentIndex]) {
//                 break;
//             }
//             [this.data[index], this.data[parentIndex]] = [this.data[parentIndex], this.data[index]];
//             index = parentIndex;
//         }
//     }
//
//     // Удаление корневого элемента.
//     // Возвращает корневой элемент, если он есть, в противном случае – undefined.
//     extract() {
//         if (this.data.length === 0) return undefined;
//         if (this.data.length === 1) return this.data.pop();
//
//         const root = this.data[0];
//         this.data[0] = this.data.pop();
//         this.sinkDown(0);
//
//         return root;
//     }
//
//     // Вспомогательная функция для перемещения элемента вниз по куче.
//     sinkDown(index) {
//         while (true) {
//             const leftChildIndex = 2 * index + 1;
//             const rightChildIndex = 2 * index + 2;
//             let smallestIndex = index;
//
//             if (leftChildIndex < this.data.length && this.data[leftChildIndex] < this.data[smallestIndex]) {
//                 smallestIndex = leftChildIndex;
//             }
//
//             if (rightChildIndex < this.data.length && this.data[rightChildIndex] < this.data[smallestIndex]) {
//                 smallestIndex = rightChildIndex;
//             }
//
//             if (smallestIndex !== index) {
//                 [this.data[index], this.data[smallestIndex]] = [this.data[smallestIndex], this.data[index]];
//                 index = smallestIndex;
//             } else {
//                 break;
//             }
//         }
//     }
// }
//

function swap(arr, current, prev) {
    const temp = arr[prev]

    arr[prev] = arr[current]
    arr[current] = temp
}

class BinaryHeap {
    constructor() {
        // Массив для хранения данных.
        this.data = [];
    }

    _bubbleUp = (currentIndex, headIndex) => {
        if (this.data[currentIndex] <= this.data[headIndex]) {
            return
        }

        if (headIndex >= 0) {
            swap(this.data, currentIndex, headIndex)
            this._bubbleUp(headIndex, Math.floor((headIndex - 1) / 2))
        }
    }

    _sinkDown = (currentIndex = 0) => {
        const currentValue = this.data.at(currentIndex)
        const leftChildIndex = (currentIndex * 2) + 1
        const rightChildIndex = (currentIndex * 2) + 2
        const leftChild = this.data.at(leftChildIndex)
        const rightChild = this.data.at(rightChildIndex)

        if (leftChild > currentValue || rightChild > currentValue) {
            if ((currentValue < leftChild) && (currentValue < rightChild)) {
                if (leftChild > rightChild) {
                    swap(this.data, currentIndex, leftChildIndex)
                    this._sinkDown((currentIndex * 2) + 1)
                } else {
                    swap(this.data, currentIndex, rightChildIndex)
                    this._sinkDown((currentIndex * 2) + 2)
                }

            }

            if (currentValue < leftChild) {
                swap(this.data, currentIndex, leftChildIndex)

                this._sinkDown((currentIndex * 2) + 1)
            }

            if (currentValue < rightChild) {
                swap(this.data, currentIndex, rightChildIndex)

                this._sinkDown((currentIndex * 2) + 1)
            }
        }
    }

    // Добавление элемента.
    insert(node) {
        this.data.push(node)

        if (this.data.length < 2) return

        const headIndex = Math.floor((this.data.length - 2) / 2)

        this._bubbleUp(this.data.length - 1, headIndex)
    }

    // Удаление корневого элемента.
    // Возвращает корневой элемент, если он есть, в противном случае –– undefined.
    extract() {
        if (!this.data.length) {
            return undefined
        }

        const head = this.data.at(0)
        this.data.shift()


        if (this.data.length > 1) {
            swap(this.data, 0, this.data.length - 1)
            this._sinkDown()
        }

        return head
    }
}

// Пример использования
const heap = new BinaryHeap();
heap.insert(2000);
heap.insert(94);
heap.insert(76);
heap.insert(1000);
heap.insert(999);
heap.insert(000);
heap.insert(100);
heap.insert(23);
heap.insert(1);
heap.insert(5);

heap.extract()

console.log('911 | 🚑', heap.data)

// console.log(heap.extract()); // Выведет 1
// console.log(heap.extract()); // Выведет 2
// console.log(heap.extract()); // Выведет 5
