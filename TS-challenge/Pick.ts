interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}

type MyPick<Entity, Key extends keyof Entity> = {
    [P in Key]: Entity[Key]
}
