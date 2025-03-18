export interface ITodo {
 id: string;
 text: string;
 completed: boolean;
}

export interface IFuncTodo {
 removeTodo: (id: string) => void;
 completeTodo: (id: string) => void;
}

export interface IStore {
 todos: Array<ITodo>;
 addTodo: (text: string) => void;
 sortableTodos: (current: ITodo[]) => void;
}

export interface IButtonPanel {
 handlerAddTodo?: (
  event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent
 ) => void;
}
