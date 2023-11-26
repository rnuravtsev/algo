function DFS(node, value) {
    // Проверяем, не является ли текущий узел искомым
    if (node.value === value) {
        return node;
    }

    // Перебираем всех детей текущего узла
    for (let child of node.children) {
        let result = DFS(child, value); // Рекурсивно вызываем DFS для каждого ребенка
        if (result) return result; // Если нашли нужный узел, возвращаем его
    }

    // Если узел не найден, возвращаем undefined
    return undefined;
}

/**
 * Авторское решение
 */

// function DFS(node, value) {
//     if (node.value === value) {
//         return node;
//     }
//
//     for (let i = 0; i < node.children.length; i++) {
//         const found = DFS(node.children[i], value);
//
//         if (found) {
//             return found;
//         }
//     }
//
//     return undefined;
// }
