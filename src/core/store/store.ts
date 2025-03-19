import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IFuncsTodo, IStore } from '@/core/types/store';
import { completeTodo } from '@/core/store/actions/completeTodo';
import { addTodo } from '@/core/store/actions/addTodo';
import { removeTodo } from '@/core/store/actions/removeTodo';
import { sortableTodos } from '@/core/store/actions/sortableTodos';
import { clearAllTodos } from '@/core/store/actions/clearAllTodos';

const useStore = create<IStore & IFuncsTodo>()(
 persist(
  (set, get) => ({
   todos: [],
   addTodo: addTodo(set),
   removeTodo: removeTodo(set, get),
   completeTodo: completeTodo(set, get),
   sortableTodos: sortableTodos(set),
   clearAllTodos: clearAllTodos(set),
  }),
  { name: 'Todos' }
 )
);

export default useStore;
