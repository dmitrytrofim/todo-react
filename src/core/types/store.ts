export interface ITodo {
 id: string;
 text: string;
}

export interface IStore {
 todos: Array<ITodo>;
 addTodo: (text: string) => void;
}
