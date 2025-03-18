export interface ITodo {
 id: string;
 text: string;
}

export interface IStore {
 todos: Array<ITodo>;
 addTodo: (text: string) => void;
 removeTodo: (id: string) => void;
 sortableTodos: (current: ITodo[]) => void;
}

export interface IButtonPanel {
 handlerAddTodo?: (
  event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent
 ) => void;
}
