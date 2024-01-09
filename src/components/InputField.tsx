import BtnsField from './BtnsField';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, deleteAll } from '../store/todoSlice';
import { useSelector } from 'react-redux';

function InputField() {
 const todos = useSelector((state: any) => state.todos.todos);
 const area = useRef<HTMLTextAreaElement>(null);
 const [valArea, setValArea] = useState<string>('');
 const fieldReset = () => {
  setValArea('');
  area.current?.focus();
 };
 const addTask = () => {
  if (!valArea.trim()) return fieldReset();
  dispatch(addTodo(valArea));
  fieldReset();
 };
 const dispatch = useDispatch();
 const delAll = () => {
  if (!window.confirm('Вы уверены?')) return;
  dispatch(deleteAll([]));
  area.current?.focus();
 };
 const inputEnter = (e: any) => {
  if (e.nativeEvent.key === 'Enter') {
   e.preventDefault();
   addTask();
   fieldReset();
  }
 };

 return (
  <div className="mb-[20px]">
   <textarea
    ref={area}
    value={valArea}
    onKeyDown={inputEnter}
    onChange={(e) => setValArea(e.target.value)}
    className="flex w-full h-[100px] text-[20px] outline-none border-[1px] rounded-[5px] p-[10px] mb-[20px] resize-none"
   ></textarea>
   <div className="flex items-stretch justify-center gap-[20px] select-none">
    <BtnsField handler={addTask} value={!valArea.trim()} text={'Добавить'} />
    <BtnsField handler={fieldReset} value={!valArea} text={'Очистить'} />
    <BtnsField
     handler={() => delAll()}
     value={!todos.length}
     text={'Удалить задачи'}
    />
   </div>
  </div>
 );
}

export default InputField;
