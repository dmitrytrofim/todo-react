import ItemTodo from '@/components/ItemTodo';
import useStore from '@/core/store/store';

function ListTodos() {
 const list = useStore((state) => state.todos);
 const removeTodo = useStore((state) => state.removeTodo);

 return (
  <ul className="flex flex-col gap-[5px]">
   {list.map((item) => (
    <ItemTodo
     key={item.id}
     text={item.text}
     id={item.id}
     removeTodo={removeTodo}
    />
   ))}
  </ul>
 );
}

export default ListTodos;
