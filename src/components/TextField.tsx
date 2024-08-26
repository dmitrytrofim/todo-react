import useStore from '~/store/todos';
import React, { useEffect, useRef } from 'react';

function TextField({ styleCls }: { styleCls?: string }) {
 const changeTextFieldStore = useStore((state) => state.changeField);
 const addTodoStore = useStore((state) => state.addTodo);
 const textFieldStore = useStore((state) => state.textField);
 const showValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  changeTextFieldStore(e.target.value);
 };
 const textArea = useRef<HTMLTextAreaElement>(null);
 const fieldFocusStore = useStore((state) => state.fieldFocus);
 const addTodoOnEnter = (e: React.KeyboardEvent) => {
  if (e.code === 'Enter' || e.code === 'NumpadEnter') {
   e.preventDefault();
   if (!textFieldStore) {
    return;
   }
   addTodoStore(Date.now());
  }
 };

 useEffect(() => {
  textArea.current!.focus();
 }, [fieldFocusStore]);

 return (
  <textarea
   onKeyDown={addTodoOnEnter}
   onInput={showValue}
   value={textFieldStore}
   ref={textArea}
   autoFocus
   className={
    'w-full h-[60px] border rounded-[10px] p-[10px] mb-[20px] ' + styleCls
   }
  ></textarea>
 );
}

export default TextField;
