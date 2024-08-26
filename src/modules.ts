export type TId = number | string;

export interface ITodosStore {
 list: Array<{ text: string; id: TId; complete: boolean }>;
 textField: string;
 fieldFocus: boolean;
 setList: (
  newList: Array<{ text: string; id: TId; complete: boolean }>
 ) => void;
 focusField: () => void;
 changeField: (text: string) => void;
 addTodo: (id: string | number) => void;
 clearField: () => void;
 removeList: () => void;
 removeItem: (id: TId) => void;
 completeItem: (id: TId) => void;
}

export interface ITodoItem {
 text: string;
 id: TId;
 complete: boolean;
}

export interface IButtonPanel {
 text: string;
 blockForField?: boolean;
 blockForList?: boolean;
 onClick?: () => void;
}
