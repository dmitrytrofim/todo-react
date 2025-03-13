export interface ITodo {
 id: string;
 text: string;
}

export interface IStore {
 todos: Array<ITodo>;
 addTodo: (text: string) => void;
}

export interface IButtonPanel {
 handlerAddTodo?: (
  event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent
 ) => void;
}
