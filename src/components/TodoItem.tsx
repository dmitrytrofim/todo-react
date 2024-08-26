import { ITodoItem } from '~/modules';
import useStore from '~/store/todos';

function TodoItem({ text, id, complete }: ITodoItem) {
 const classBtn =
  'w-[20px] h-[20px] flex items-center justify-center text-[12px] rounded-[5px] bg-[black] text-[white] font-700';
 const itemCompleteCls = complete ? ' bg-[darkgray] text-[white]' : '';
 const btnCompleteCls = complete ? ' !bg-[white] !text-[#000]' : '';

 const removeItemStore = useStore((state) => state.removeItem);
 const completeItemStore = useStore((state) => state.completeItem);

 return (
  <li
   className={
    'flex items-stretch gap-[10px] border rounded-[5px] p-[5px_10px] mb-[5px]' +
    itemCompleteCls
   }
  >
   <button
    onClick={() => completeItemStore(id)}
    className={classBtn + btnCompleteCls}
   >
    &#10003;
   </button>
   <p className="grow flex items-center">{text}</p>
   <button onClick={() => removeItemStore(id)} className={classBtn}>
    &#10007;
   </button>
  </li>
 );
}

export default TodoItem;
