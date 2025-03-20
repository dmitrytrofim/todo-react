export interface ITodo {
 id: string;
 text: string;
 completed: boolean;
}

export interface IFuncsTodo {
 removeTodo: (id: string) => void;
 completeTodo: (id: string) => void;
}

export interface IStore {
 todos: Array<ITodo>;
 addTodo: (text: string) => void;
 sortableTodos: (current: ITodo[]) => void;
 clearAllTodos: () => void;
}

export interface IButtonPanel {
 children: React.ReactNode;
 handler?: (
  event: React.MouseEvent<HTMLButtonElement> & React.KeyboardEvent
 ) => void;
 block?: boolean;
}
