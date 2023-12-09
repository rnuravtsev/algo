// Неверное решение через this.value = []

// export class MyArray {
//     length: number
//     size: number
//     value: any[]
//     memory: Record<any, any>
//
//     constructor(initialSize = 1) {
//         if (Number(initialSize) !== initialSize || Math.round(initialSize) !== initialSize) {
//             throw new Error('Длина массива должна быть целым числом');
//         }
//
//         if (!(initialSize > 0)) {
//             throw new Error('Размер массива должен быть больше нуля');
//         }
//
//         this.size = initialSize;
//         this.memory = allocate(initialSize);
//         this.length = 0;
//         this.value = []
//     }
//
//     private _checkIndex = (index: number) => {
//         if (index > this.length) {
//             throw new Error('error')
//         }
//     }
//
//     // Возвращает значение по индексу.
//     // Если индекс за пределами — кидает ошибку.
//     get(index: number) {
//         this._checkIndex(index)
//
//         return this.value[index]
//     }
//
//     // Устанавливает значение по индексу.
//     // Если индекс за пределами — кидает ошибку.
//     set(index: number, value: any) {
//         this._checkIndex(index)
//
//         this.value[index] = value
//     }
//
//     // Добавляет новый элемент в массив.
//     // Если index не определён — добавляет в конец массива.
//     // В противном случае — добавляет по индексу со сдвигом
//     // всех последующих элементов.
//     // Если индекс за пределами - кидает ошибку.
//     // Увеличивает выделенную память вдвое, если необходимо.
//     // Возвращает новую длину массива.
//     add(value: any, index?: number) {
//         if (index) {
//             this._checkIndex(index)
//         }
//
//         if (this.length === this.size) {
//             this.memory = allocate(this.size * 2)
//             this.size = Object.keys(this.memory).length;
//         }
//
//         if (index) {
//             const beforeArr = this.value.slice(0, index)
//             const afterArr = this.value.slice(index)
//             this.length++
//             this.value = [...beforeArr, value, ...afterArr]
//
//             return this.length
//         }
//
//         this.length++
//         this.value.push(value)
//
//         return this.length
//     }
//
//     // add(value: any, index?: number) {
//     //     if (index !== undefined) {
//     //         this._checkIndex(index);
//     //
//     //         this.value.splice(index, 0, value);
//     //     } else {
//     //         this.value.push(value);
//     //     }
//     //
//     //     this.length++;
//     //
//     //     if (this.length === this.size) {
//     //         allocate(this.size * 2);
//     //     }
//     // }
//
//     // Удаляет элемент по индексу со сдвигом всех последующих элементов.
//     // Если индекс за пределами - кидает ошибку.
//     // Возвращает новую длину массива.
//     delete(index: number) {
//         this._checkIndex(index)
//
//         this.value = this.value.filter(el => el !== this.value[index])
//
//         this.length--
//
//         return this.length;
//     }
// }
//
// function allocate(size: number) {
//     const memory = {};
//
//     for (let i = 0; i < size; i++) {
//         // @ts-ignore
//         memory[i] = undefined;
//     }
//
//     return memory;
// }

export class MyArray {
    length: number
    size: number
    memory: Record<any, any>

    constructor(initialSize = 1) {
        if (Number(initialSize) !== initialSize || Math.round(initialSize) !== initialSize) {
            throw new Error('Длина массива должна быть целым числом');
        }
        if (!(initialSize > 0)) {
            throw new Error('Размер массива должен быть больше нуля');
        }

        this.size = initialSize;
        this.memory = allocate(initialSize);
        this.length = 0;
    }

    get(index: number) {
        this._checkIndex(index);
        return this.memory[index];
    }

    set(index: number, value: any) {
        this._checkIndex(index);
        this.memory[index] = value;
    }

    add(value: any, index?: number) {
        if (index === undefined) {
            this.memory[this.length] = value;
        } else {
            this._checkIndex(index);

            // Часть памяти от index до конца сдвигаем на 1, достигается это благодаря добавлению нового
            // элемента и перекдиыванию с прошлого на текущий
            for (let i = this.length; i > index; i--) {
                this.memory[i] = this.memory[i - 1]
            }

            this.memory[index] = value

        }

        this.length++;

        if (this.length === this.size) {
            this._resize();
        }

        return this.length;
    }

    delete(index: number) {
        this._checkIndex(index);

        for (let i = index + 1; i < this.length; i++) {
            this.memory[i - 1] = this.memory[i];
        }

        this.length--;
        this.memory[this.length] = undefined;

        return this.length;
    }

    _resize() {
        const newSize = this.size * 2;
        const newMemory = allocate(newSize);

        for (let i = 0; i < this.size; i++) {
            // @ts-ignore
            newMemory[i] = this.memory[i];
        }

        this.size = newSize;
        this.memory = newMemory;
    }

    _checkIndex(index: number) {
        if (index < 0 || index >= this.length) {
            throw new Error('Индекс за пределами массива');
        }
    }
}

function allocate(size: number) {
    const memory = {};

    for (let i = 0; i < size; i++) {
        // @ts-ignore
        memory[i] = undefined;
    }

    return memory;
}

/**
 * Авторское решение
 *
 * class MyArray {
 * 	constructor(initialSize = 1) {
 * 		if (Number(initialSize) !== initialSize || Math.round(initialSize) !== initialSize) {
 * 			throw new Error('Длина массива должна быть целым числом');
 * 		}
 * 		if (!(initialSize > 0)) {
 *         throw new Error('Размер массива должен быть больше нуля');
 *     }
 *
 * 		this.size = initialSize;
 * 		this.memory = allocate(initialSize);
 * 		this.length = 0;
 * 	}
 *
 * 	get(index){
 * 		this._checkIndex(index);
 * 		return this.memory[index];
 * 	}
 *
 * 	set(index, value) {
 * 		this._checkIndex(index);
 * 		this.memory[index] = value;
 * 	}
 *
 * 	add(value, index) {
 * 		if (index === undefined) {
 * 			this.memory[this.length] = value;
 * 		} else {
 * 			this._checkIndex(index);
 *
 * 			for (let i = this.length; i > index; i--) {
 * 				this.memory[i] = this.memory[i - 1];
 * 			}
 *
 * 			this.memory[index] = value;
 * 		}
 *
 * 		this.length++;
 *
 * 		if (this.length === this.size) {
 * 	    this._resize();
 *     }
 *
 * 		return this.length;
 * 	}
 *
 * 	delete(index) {
 * 		this._checkIndex(index);
 *
 * 		for (let i = index + 1; i < this.length; i++) {
 * 			this.memory[i - 1] = this.memory[i];
 * 		}
 *
 * 		this.length--;
 * 		this.memory[this.length] = undefined;
 *
 * 		return this.length;
 * 	}
 *
 * 	_resize() {
 *     const newSize = this.size * 2;
 * 		const newMemory = allocate(newSize);
 *
 * 		for (let i = 0; i < this.size; i++) {
 * 			newMemory[i] = this.memory[i];
 * 		}
 *
 *     this.size = newSize;
 * 		this.memory = newMemory;
 * 	}
 *
 * 	_checkIndex(index) {
 * 		if (index < 0 || index >= this.length) {
 * 			throw new Error('Индекс за пределами массива');
 * 		}
 * 	}
 * }
 *
 * function allocate(size) {
 *     const memory = {};
 *
 *     for (let i = 0; i < size; i++) {
 *         memory[i] = undefined;
 *     }
 *
 *     return memory;
 * }
 */
