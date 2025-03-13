import ItemTodo from '@/components/ItemTodo';
import useStore from '@/core/store/store';

function ListTodos() {
 const list = useStore((state) => state.todos);

 return (
  <ul className="">
   {list.map((item) => (
    <ItemTodo key={item.id} text={item.text} />
   ))}
  </ul>
 );
}

export default ListTodos;
