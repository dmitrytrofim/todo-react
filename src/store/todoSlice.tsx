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
   state.todos.push({
    id: uuidv4(),
    text: action.payload,
    completed: false,
   });
  },
  completeTodo(state, action) {
   const toggleTodo: any = state.todos.find(
    (todo) => todo.id === action.payload
   );
   toggleTodo.completed = !toggleTodo.completed;
  },
  deleteTodo(state, action) {
   state.todos = state.todos.filter((todo) => todo.id !== action.payload);
  },
  deleteAll(state, action) {
   state.todos = action.payload;
  },
  load(state, action) {
   state.todos.push(...action.payload);
  },
 },
});

export const { addTodo, completeTodo, deleteTodo, deleteAll, load } =
 todoSlice.actions;

export default todoSlice.reducer;
