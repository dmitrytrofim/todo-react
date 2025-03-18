import { create } from 'zustand';
import { IStore } from '@/core/types/store';

const useStore = create<IStore>((set, get) => ({
 todos: [],
 addTodo: (text) =>
  set((state) => ({
   todos: [
    ...state.todos,
    {
     id: crypto.randomUUID(),
     text,
    },
   ],
  })),
 removeTodo: (id) =>
  set(() => ({
   todos: get().todos.filter((item) => item.id !== id),
  })),
}));

export default useStore;
