import TodoItem from './TodoItem';

function TodoList({ todos, completeTodo, deleteTodo }: any) {
 return todos.map((todo: any) => (
  <TodoItem
   key={todo.id}
   {...todo}
   completeTodo={completeTodo}
   deleteTodo={deleteTodo}
  />
 ));
}

export default TodoList;
