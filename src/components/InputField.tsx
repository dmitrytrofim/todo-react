import { useDispatch } from 'react-redux';
import { addTodo, deleteAll } from '../store/todoSlice';

function InputField({ area }: any) {
 const fieldReset = () => {
  area.current!.value = '';
  area.current?.focus();
 };
 const dispatch = useDispatch();
 const addTask = () => {
  if (!area.current!.value.trim()) {
   area.current!.value = '';
   return area.current?.focus();
  }
  dispatch(addTodo(area.current!.value));
  fieldReset();
 };
 const delAll = () => {
  dispatch(deleteAll());
  area.current?.focus();
 };
 return (
  <div className="mb-[20px]">
   <textarea
    ref={area}
    className="flex w-full h-[100px] text-[20px] outline-none border-[1px] rounded-[5px] p-[10px] mb-[20px] resize-none"
   ></textarea>
   <div className="flex items-center justify-center gap-[20px]">
    <button
     onClick={addTask}
     className="border-[2px] rounded-[5px] p-[5px]"
     type="button"
    >
     Добавить
    </button>
    <button
     onClick={fieldReset}
     className="border-[2px] rounded-[5px] p-[5px]"
     type="button"
    >
     Очистить
    </button>
    <button
     onClick={() => delAll()}
     className="border-[2px] rounded-[5px] p-[5px]"
     type="button"
    >
     Удалить задачи
    </button>
   </div>
  </div>
 );
}

export default InputField;
