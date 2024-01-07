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
   console.log(state);
   console.log(action);

   state.todos.push({
    id: uuidv4(),
    text: action.payload,
    completed: false,
   });
  },
  // completeTodo(state, action) {},
  // deleteTodo(state, action) {},
 },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
