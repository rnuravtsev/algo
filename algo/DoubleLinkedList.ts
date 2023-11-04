type Nullable<T> = T | null

type LinkedEl<T = number> = {
    value: T
    index: number
    next: Nullable<LinkedEl>;
    prev: Nullable<LinkedEl>;
}

class DoublyLinkedList {
    size: number;
    head: Nullable<LinkedEl>
    tail: Nullable<LinkedEl>

    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    private checkSize(index: number) {
        if (index > this.size || index < this.size) throw new Error('element should be in range')
    }

    // Добавляет элемент в список.
    // Если указан индекс - добавляет по индексу,
    // в противном случае добавляет в конец.
    // Если индекс за пределами — кидает ошибку.
    add(value: number, index?: number) {
        if (index) {
            this.checkSize(index)
        }

        const newNode = createNode(value);

        if(this.size) {
            if(this.size === 1) {
                newNode.prev = this.head
                newNode.index = this.head!.index + 1
                this.tail = newNode
                // Обновляем next головы, чтобы указывал на хвост
                this.head!.next = this.tail
            } else {
                newNode.index = this.tail!.index + 1
                newNode.prev = this.tail
                this.tail!.next = newNode
                this.tail = { ...this.tail, ...newNode }
            }

            this.size += 1
        } else {
            this.head = newNode
            this.head.index = 1
            this.size += 1
        }
    }

    // Удаляет элемент из списка по значению.
    // Удаляет только первый найденный элемент.
    // Если элемент не найден, ничего делать не нужно.
    removeByValue(value: unknown) {
    }

    // Удаляет элемент из списка по индексу.
    // Если индекс за пределами — кидает ошибку.
    removeByIndex(index: number) {
        this.checkSize(index)
    }

    // Ищет элемент в списке по индексу.
    // Если индекс за пределами — кидает ошибку.
    searchByIndex(index: number) {
        // this.checkSize(index)
        if(this.size) {
            console.log('911.', Object.values(this.head!))
            return Object.values(this.head!).find((el: any) => el!.index === index)
        }

    }

    // Ищет элемент в списке по значению.
    // Возвращает первый найденный элемент.
    // Опционально можно указать индекс начала поиска.
    // Если индекс за пределами — кидает ошибку.
    // Если элемент не найден, нужно вернуть null.
    searchByValue(value: number, startIndex = 0) {
    }
}

// Создаёт новую ноду, где
// value — её значение,
// next — ссылка на следующую ноду,
// prev — ссылка на предыдущую ноду
function createNode(value: number, index = 0): LinkedEl {
    return {
        value,
        index,
        next: null,
        prev: null,
    };
}


const list = new DoublyLinkedList();
list.add(5);
list.add(10);
list.add(15);
list.add(25);
list.add(35);
list.add(45);
list.searchByIndex(2)
// list.add(20);
// list.add(25);

// console.log('911.', list)


// console.log('911.', list)
// list.add(3);
// list.add(-13);
// console.log(list.head);
