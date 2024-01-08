import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { useDispatch } from 'react-redux';
import { loadTodo } from '../store/todoSlice';
import { useMemo } from 'react';

function TodoList() {
 const dispatch = useDispatch();
 const todos = useSelector((state: any) => state.todos.todos);
 const startTasks = window.localStorage.getItem('todo');

 useMemo(() => {
  if (startTasks && todos.length === 0)
   dispatch(loadTodo([...JSON.parse(startTasks!)]));
 }, [startTasks, dispatch, todos.length]);

 return todos.map((todo: any) => <TodoItem key={todo.id} {...todo} />);
}

export default TodoList;
