import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, deleteAll } from '../store/todoSlice';
import { useSelector } from 'react-redux';

function InputField() {
 const todos = useSelector((state: any) => state.todos.todos);
 const area = useRef<HTMLTextAreaElement>(null);
 const [valArea, setValArea] = useState<string>('');
 const addTask = () => {
  if (!area.current!.value.trim()) return fieldReset();
  dispatch(addTodo(area.current!.value));
  setValArea('');
  fieldReset();
 };
 const fieldReset = () => {
  area.current!.value = '';
  setValArea('');
  area.current?.focus();
 };
 const blockBtns = () => {
  setValArea(area.current!.value.trim());
 };
 const dispatch = useDispatch();
 const delAll = () => {
  if (!window.confirm('Вы уверены?')) return;
  dispatch(deleteAll([]));
  area.current?.focus();
 };

 return (
  <div className="mb-[20px]">
   <textarea
    ref={area}
    onChange={blockBtns}
    className="flex w-full h-[100px] text-[20px] outline-none border-[1px] rounded-[5px] p-[10px] mb-[20px] resize-none"
   ></textarea>
   <div className="flex items-stretch justify-center gap-[20px] select-none">
    <button
     onClick={addTask}
     className={`border-[2px] rounded-[5px] p-[5px] ${
      !valArea
       ? 'bg-[#9DA1AA] border-[#9DA1AA] text-[#fff] pointer-events-none'
       : ''
     }`}
     type="button"
    >
     Добавить
    </button>
    <button
     onClick={fieldReset}
     className={`border-[2px] rounded-[5px] p-[5px] ${
      !valArea
       ? 'bg-[#9DA1AA] border-[#9DA1AA] text-[#fff] pointer-events-none'
       : ''
     }`}
     type="button"
    >
     Очистить
    </button>
    <button
     onClick={() => delAll()}
     className={`border-[2px] rounded-[5px] p-[5px] ${
      !todos.length
       ? 'bg-[#9DA1AA] border-[#9DA1AA] text-[#fff] pointer-events-none'
       : ''
     }`}
     type="button"
    >
     Удалить задачи
    </button>
   </div>
  </div>
 );
}

export default InputField;
