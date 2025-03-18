import { ITodo } from '@/core/types/store';

export const completeTodo = (set: any, get: any) => (id: string) => {
 const currentTodo = get().todos.find((item: ITodo) => item.id === id);
 const completeTodo = {
  ...currentTodo,
  completed: !currentTodo?.completed,
 };
 const filterTodos = get().todos.filter((item: ITodo) => item.id !== id);
 const newTodos = completeTodo.completed
  ? [...filterTodos, completeTodo]
  : [completeTodo, ...filterTodos];
 return set(() => ({
  todos: newTodos,
 }));
};
