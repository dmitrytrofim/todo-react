import { create } from 'zustand';
import { IStore } from '@/core/types/store';

const useStore = create<IStore>((set) => ({
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
}));

export default useStore;
