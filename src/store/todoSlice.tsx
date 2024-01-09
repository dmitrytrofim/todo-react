import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface ToDo {
 id: string;
 text: string;
 completed: boolean;
}

const todoSlice = createSlice({
 name: 'todos',
 initialState: {
  todos: [] as Array<ToDo>,
 },
 reducers: {
  addTodo(state, action) {
   state.todos.unshift({
    id: uuidv4(),
    text: action.payload,
    completed: false,
   });
   window.localStorage.setItem('todo', JSON.stringify(state.todos));
  },
  completeTodo(state, action) {
   const toggleTodo: any = state.todos.find(
    (todo) => todo.id === action.payload
   );
   toggleTodo.completed = !toggleTodo.completed;
   window.localStorage.setItem('todo', JSON.stringify(state.todos));
  },
  deleteTodo(state, action) {
   state.todos = state.todos.filter((todo) => todo.id !== action.payload);
   window.localStorage.setItem('todo', JSON.stringify(state.todos));
  },
  deleteAll(state, action) {
   state.todos = action.payload;
   window.localStorage.setItem('todo', JSON.stringify(state.todos));
  },
  loadTodo(state, action) {
   state.todos.push(...action.payload);
  },
 },
});

export const { addTodo, completeTodo, deleteTodo, deleteAll, loadTodo } =
 todoSlice.actions;

export default todoSlice.reducer;
