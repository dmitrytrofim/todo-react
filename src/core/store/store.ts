import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IStore } from '@/core/types/store';

const useStore = create<IStore>()(
 persist(
  (set, get) => ({
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
  }),
  { name: 'Todos' }
 )
);

export default useStore;
