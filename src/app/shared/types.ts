export enum LOCAL_STORAGE_KEYS {
    todos = 'todos',
}

export enum TodoStatus {
    todo = 'todo',
    done = 'done',
}

export interface ITodo {
    title: string;
    status: TodoStatus;
}