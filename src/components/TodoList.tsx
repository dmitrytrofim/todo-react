import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
 const todos = useSelector((state: any) => state.todos.todos);
 return todos.map((todo: any) => <TodoItem key={todo.id} {...todo} />);
}

export default TodoList;
