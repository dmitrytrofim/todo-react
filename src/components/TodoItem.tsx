import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodo } from '../store/todoSlice';

function TodoItem({ id, text, completed }: any) {
 const dispatch = useDispatch();

 return (
  <div key={id} className="flex items-center gap-[7px]">
   <input
    onChange={() => dispatch(completeTodo(id))}
    className="shrink-0 cursor-pointer"
    type="checkbox"
   />
   <p
    className={`grow text-[20px] p-[10px] border-[1px] rounded-[5px] ${
     completed ? 'bg-[#B5B8B1] text-[#fff]' : ''
    }`}
   >
    {text}
   </p>
   <div onClick={() => dispatch(deleteTodo(id))} className="cursor-pointer">
    &#10008;
   </div>
  </div>
 );
}

export default TodoItem;
