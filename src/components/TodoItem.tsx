import { ITodoItem } from '~/modules';
import useStore from '~/store/todos';

function TodoItem({ text, id, complete }: ITodoItem) {
 const classBtn =
  'w-[20px] h-[20px] flex items-center justify-center text-[12px] rounded-[5px] bg-[black] text-[white] font-700';
 const itemCompleteCls = complete ? ' bg-[darkgray] text-[white]' : '';
 const btnCompleteCls = complete ? ' !text-[lightgray]' : '';

 const removeItemStore = useStore((state) => state.removeItem);
 const completeItemStore = useStore((state) => state.completeItem);

 return (
  <li className="flex items-center gap-[6px] mb-[5px]">
   <button
    onClick={() => completeItemStore(id)}
    className={classBtn + btnCompleteCls}
   >
    &#10003;
   </button>
   <p
    className={
     'grow flex items-center border rounded-[5px] p-[5px_10px]' +
     itemCompleteCls
    }
   >
    {text}
   </p>
   <button
    onClick={() => removeItemStore(id)}
    className={classBtn + btnCompleteCls}
   >
    &#10007;
   </button>
  </li>
 );
}

export default TodoItem;
