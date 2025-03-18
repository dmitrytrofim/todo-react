function useAddTodo(
 addTodo: (text: string) => void,
 textArea: string,
 setTextArea: (textArea: string) => void,
 field: React.RefObject<HTMLTextAreaElement | null>
) {
 const handlerAddTodo = (
  event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent
 ) => {
  const enterEvent = event as React.KeyboardEvent;
  if (enterEvent.key === 'Enter' || event.type === 'click') {
   if (enterEvent.shiftKey === true) return;
   event.preventDefault();
   field.current!.focus();
   if (textArea.trim() === '') {
    setTextArea('');
    return;
   }
   addTodo(textArea);
   setTextArea('');
  }
 };

 return handlerAddTodo;
}

export default useAddTodo;
