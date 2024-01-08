import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { useDispatch } from 'react-redux';
import { load } from '../store/todoSlice';
import { useLayoutEffect } from 'react';

function TodoList() {
 const dispatch = useDispatch();
 const todos = useSelector((state: any) => state.todos.todos);
 const startTasks = localStorage.getItem('todo');
 const addLoad = () => {
  if (todos.length === 0) dispatch(load([...JSON.parse(startTasks!)]));
 };

 useLayoutEffect(() => {
  window.addEventListener('load', addLoad);
  return () => window.removeEventListener('load', addLoad);
 });

 return todos.map((todo: any) => <TodoItem key={todo.id} {...todo} />);
}

export default TodoList;
