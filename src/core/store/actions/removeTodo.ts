import { ITodo } from '@/core/types/store';

export const removeTodo = (set: any, get: any) => (id: string) => {
 set(() => ({
  todos: get().todos.filter((item: ITodo) => item.id !== id),
 }));
};
