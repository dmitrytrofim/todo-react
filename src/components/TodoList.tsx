import useStore from '~/store/todos';
import TodoItem from './TodoItem';
import { ReactSortable } from 'react-sortablejs';

function TodoList() {
 const listTodoStore = useStore((state) => state.list);
 const setListTodoStore = useStore((state) => state.setList);

 return (
  <ul className="flex flex-col">
   <ReactSortable
    list={listTodoStore}
    setList={(newList) => {
     setListTodoStore(newList);
    }}
   >
    {listTodoStore.map((item) => (
     <TodoItem
      text={item.text}
      id={item.id}
      key={item.id}
      complete={item.complete}
     />
    ))}
   </ReactSortable>
  </ul>
 );
}

export default TodoList;
