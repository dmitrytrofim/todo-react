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
   event.preventDefault();
   addTodo(textArea);
   setTextArea('');
   field.current!.focus();
  }
 };

 return handlerAddTodo;
}

export default useAddTodo;
