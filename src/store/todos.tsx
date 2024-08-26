import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ITodosStore } from '~/modules';

const useStore = create(
 persist<ITodosStore>(
  (set, get) => ({
   list: [],
   textField: '',
   fieldFocus: false,
   setList(newList) {
    set({ list: newList });
   },
   focusField() {
    set((state) => ({
     fieldFocus: !state.fieldFocus,
    }));
   },
   changeField(text: string) {
    set({ textField: text.trimStart() });
   },
   addTodo(id) {
    set((state) => {
     const text = state.textField.trim();
     state.textField = '';
     return {
      list: [{ text, id, complete: false }, ...state.list],
     };
    });
   },
   clearField() {
    set({ textField: '' });
   },
   removeList() {
    set({ list: [] });
   },
   removeItem(id) {
    set((state) => ({
     list: state.list.filter((item) => item.id !== id),
    }));
   },
   completeItem(id) {
    const todoIndex = get().list.findIndex((item) => item.id === id);
    const changeTodo = get().list.slice(todoIndex, todoIndex + 1);
    changeTodo[0].complete = !changeTodo[0].complete;
    const newTodos = get().list.filter((item) => item.id !== id);
    if (changeTodo[0].complete === true) {
     newTodos.push(changeTodo[0]);
    } else {
     newTodos.unshift(changeTodo[0]);
    }
    set({ list: newTodos });
   },
  }),
  {
   name: 'todos-storage',
  }
 )
);

export default useStore;
