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
      {
       id: crypto.randomUUID(),
       text,
      },
      ...state.todos,
     ],
    })),
   removeTodo: (id) =>
    set(() => ({
     todos: get().todos.filter((item) => item.id !== id),
    })),
   sortableTodos: (current) =>
    set(() => ({
     todos: current,
    })),
  }),
  { name: 'Todos' }
 )
);

export default useStore;
