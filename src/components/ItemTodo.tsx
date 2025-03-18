import BtnItem from '@/components/BtnItem';
import { IFuncTodo, ITodo } from '@/core/types/store';

function ItemTodo({
 text,
 id,
 completed,
 removeTodo,
 completeTodo,
}: ITodo & IFuncTodo) {
 return (
  <li className="flex items-center gap-[10px] rounded-[5px] border px-[5px]">
   <BtnItem id={id} handler={completeTodo}>
    &#10004;
   </BtnItem>
   <input
    className="w-full h-full py-[5px] cursor-grab"
    type="text"
    readOnly
    value={text}
   />
   <span>{completed ? 'true' : 'false'}</span>
   <BtnItem id={id} handler={removeTodo}>
    &#10008;
   </BtnItem>
  </li>
 );
}

export default ItemTodo;
