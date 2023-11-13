type Edge<T extends string> = T[]
type Vertex = string

class Graph<T extends string> {
    data: Record<T, T[]>

    constructor() {
        this.data = {} as Record<T, T[]>;
    }

    // Добавляет вершину.
    // Если вершина уже существует, ничего не делает.
    addVertex(vertex: T) {
        if(!(this.data.hasOwnProperty(vertex))) {
            this.data[vertex] = []
        }
    }

    // Удаляет вершину.
    removeVertex(vertex: T) {
        if(this.data.hasOwnProperty(vertex)) {
            for(let existVertex of this.data[vertex]) {
                this.data[existVertex] = this.data[existVertex].filter(el => el !== vertex)
            }

            delete this.data[vertex]
        }
    }

    // Добавляет грань между двумя вершинами.
    addEdge(vertex1: T, vertex2: T) {
        if((this.data.hasOwnProperty(vertex1)) && this.data.hasOwnProperty(vertex2) && (vertex1 !== vertex2)) {
            if(!this.data[vertex1].includes(vertex2)) {
                this.data[vertex1].push(vertex2)
            }

            if(!this.data[vertex2].includes(vertex1)) {
                this.data[vertex2].push(vertex1)
            }
        }
    }

    // Удаляет грань между двумя вершинами.
    removeEdge(vertex1: T, vertex2: T) {
        if(this.data[vertex1] && this.data[vertex2]) {
            this.data[vertex1] = this.data[vertex1].filter(existVertex => existVertex !== vertex2)
            this.data[vertex2] = this.data[vertex2].filter(existVertex => existVertex !== vertex1)
        }
    }
}

// Пример использованиия
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');

graph.addEdge('B', 'D');
graph.addEdge('D', 'B');

graph.removeEdge('A', 'B')
graph.removeVertex('B')

console.log(graph.data);
/*
{
  A: ['B', 'C'],
  B: ['A'],
  C: ['A'],
  D: []
}
 */


/**
 * Авторское решение
 * class Graph {
 *     constructor() {
 *         this.data = {};
 *     }
 *
 *     addVertex(vertex) {
 *         if (this.data[vertex]) {
 *             return;
 *         }
 *
 *         this.data[vertex] = [];
 *     }
 *
 *     removeVertex(vertex) {
 *         if (!this.data[vertex]) {
 *             return;
 *         }
 *
 *         while (this.data[vertex].length) {
 *             this.removeEdge(vertex, this.data[vertex][0]);
 *         }
 *
 *         delete this.data[vertex];
 *     }
 *
 *     addEdge(vertex1, vertex2) {
 *         if (!this.data[vertex1] || !this.data[vertex2]) {
 *             return;
 *         }
 *
 * 				if (vertex1 === vertex2) {
 *             return;
 *         }
 *
 *         if (this.data[vertex1].indexOf(vertex2) === -1) {
 *             this.data[vertex1].push(vertex2);
 *         }
 *
 *         if (this.data[vertex2].indexOf(vertex1) === -1) {
 *             this.data[vertex2].push(vertex1);
 *         }
 *     }
 *
 *     removeEdge(vertex1, vertex2) {
 *         if (!this.data[vertex1] || !this.data[vertex2]) {
 *             return;
 *         }
 *
 *         const i1 = this.data[vertex1].indexOf(vertex2);
 *
 *         if (i1 > -1) {
 *             this.data[vertex1].splice(i1, 1);
 *         }
 *
 *         const i2 = this.data[vertex2].indexOf(vertex1);
 *
 *         if (i2 > -1) {
 *             this.data[vertex2].splice(i2, 1);
 *         }
 *     }
 * }
 */
