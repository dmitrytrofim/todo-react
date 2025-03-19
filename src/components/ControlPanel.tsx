import { useEffect, useRef, useState } from 'react';
import useStore from '@/core/store/store';
import ButtonPanel from '@/components/ButtonPanel';
import useAddTodo from '@/core/hooks/useAddTodo';
import TextAreaPanel from '@/components/TextAreaPanel';

function ControlPanel() {
 const field = useRef<HTMLTextAreaElement>(null);
 const list = useStore((state) => state.todos);
 const addTodo = useStore((state) => state.addTodo);
 const clearAllTodos = useStore((state) => state.clearAllTodos);
 const [textArea, setTextArea] = useState('');

 const inputText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  setTextArea(event.target.value);
 };
 const handlerAddTodo = useAddTodo(addTodo, textArea, setTextArea, field);
 const clearTodos = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  if (list.length === 0) return;
  confirm('Удалить все задачи?') && clearAllTodos();
 };

 useEffect(() => {
  field.current?.focus();
 }, []);

 return (
  <form className="flex flex-col gap-[20px] mb-[20px]">
   <TextAreaPanel
    inputText={inputText}
    handlerAddTodo={handlerAddTodo}
    field={field}
    textArea={textArea}
   />
   <div className="flex justify-center gap-[10px]">
    <ButtonPanel handler={handlerAddTodo}>Добавить</ButtonPanel>
    <ButtonPanel handler={clearTodos}>Очистить все</ButtonPanel>
   </div>
  </form>
 );
}

export default ControlPanel;
