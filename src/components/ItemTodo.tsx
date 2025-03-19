import BtnItem from '@/components/BtnItem';
import { IFuncsTodo, ITodo } from '@/core/types/store';

function ItemTodo({
 text,
 id,
 completed,
 removeTodo,
 completeTodo,
}: ITodo & IFuncsTodo) {
 return (
  <li
   className={`flex items-center gap-[10px] rounded-[5px] border px-[5px] ${
    completed && 'bg-[darkgray] text-[white] border-[darkgray]'
   }`}
  >
   <BtnItem id={id} handler={completeTodo}>
    &#10004;
   </BtnItem>
   <p
    onBlur={(e) => console.log(e)}
    className="w-full resize-none py-[5px] focus-visible:outline-none cursor-grab"
    contentEditable={false}
    suppressContentEditableWarning={true}
   >
    {text}
   </p>
   <BtnItem id={id} handler={removeTodo}>
    &#10008;
   </BtnItem>
  </li>
 );
}

export default ItemTodo;
