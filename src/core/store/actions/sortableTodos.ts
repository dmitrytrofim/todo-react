import { ITodo } from '@/core/types/store';

export const sortableTodos = (set: any) => (current: ITodo[]) => {
 set(() => ({
  todos: current,
 }));
};
