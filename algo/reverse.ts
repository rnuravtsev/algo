/*
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/

/**
 * function ListNode(value, next) {
 *     this.value = (value===undefined ? 0 : value)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function reverse(head: any) {
    let prev = null
    let current = head
    let next = head

    while(current.next !== null) {
        next = current.next // назначаем следующий элемент на каждой итерации
        current.next = prev

        // Меняем указатели на следующие позиции
        prev = current
        current = next
    }

    return prev
}

const linkedList = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}

console.log('911.', reverse(linkedList))
