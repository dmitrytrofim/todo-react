export const addTodo = (set: any) => (text: string) => {
 set((state: any) => ({
  todos: [
   {
    id: crypto.randomUUID(),
    text,
    completed: false,
   },
   ...state.todos,
  ],
 }));
};
