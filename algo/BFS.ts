function breadthFirstSearch(root, target) {
    if (root === null) return undefined;

    let queue = [root];

    while (queue.length > 0) {
        let node = queue.shift();

        if (node.value === target) {
            return node;
        }

        queue.push(...node.children);
    }

    return undefined;
}
