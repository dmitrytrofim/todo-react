import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IFuncTodo, IStore } from '@/core/types/store';
import { completeTodo } from '@/core/store/actions/completeTodo';

const useStore = create<IStore & IFuncTodo>()(
 persist(
  (set, get) => ({
   todos: [],
   addTodo: (text) =>
    set((state) => ({
     todos: [
      {
       id: crypto.randomUUID(),
       text,
       completed: false,
      },
      ...state.todos,
     ],
    })),
   removeTodo: (id) =>
    set(() => ({
     todos: get().todos.filter((item) => item.id !== id),
    })),
   completeTodo: completeTodo(set, get),
   sortableTodos: (current) =>
    set(() => ({
     todos: current,
    })),
  }),
  { name: 'Todos' }
 )
);

export default useStore;
