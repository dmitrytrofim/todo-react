export const clearAllTodos = (set: any) => () =>
 set(() => ({
  todos: [],
 }));
