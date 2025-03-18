import ItemTodo from '@/components/ItemTodo';
import useStore from '@/core/store/store';
import { ReactSortable } from 'react-sortablejs';

function ListTodos() {
 const list = useStore((state) => state.todos);
 const removeTodo = useStore((state) => state.removeTodo);
 const completeTodo = useStore((state) => state.completeTodo);
 const sortableTodos = useStore((state) => state.sortableTodos);

 return (
  <ReactSortable
   className="flex flex-col gap-[5px]"
   list={list}
   setList={(newState) => sortableTodos(newState)}
   tag="ul"
  >
   {list.map((item) => (
    <ItemTodo
     key={item.id}
     text={item.text}
     id={item.id}
     completed={item.completed}
     removeTodo={removeTodo}
     completeTodo={completeTodo}
    />
   ))}
  </ReactSortable>
 );
}

export default ListTodos;
