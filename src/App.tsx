import TheWrapper from '@/containers/TheWrapper';
import Header from '@/containers/TheHeader';
import Footer from '@/containers/TheFooter';
import Container from '@/containers/Container';
import useStore from '@/core/store/store';
import { useRef, useState } from 'react';

function App() {
 const list = useStore((state) => state.todos);
 const field = useRef<HTMLTextAreaElement>(null);
 const addTodo = useStore((state) => state.addTodo);
 const [textArea, setTextArea] = useState('');

 const inputText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  setTextArea(event.target.value);
 };

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

 return (
  <>
   <TheWrapper>
    <Header />
    <main className="p-[20px]">
     <Container>
      <h1 className="text-[30px] font-600 text-center mb-[20px]">ToDo</h1>
      <form className="flex flex-col gap-[20px] mb-[20px]">
       <textarea
        onInput={inputText}
        onKeyDown={handlerAddTodo}
        rows={2}
        ref={field}
        value={textArea}
        className="w-full border rounded-[10px] p-[5px_10px]"
       ></textarea>
       <div className="flex justify-center">
        <button
         onClick={handlerAddTodo}
         className="border cursor-pointer p-[5px_10px]"
        >
         Добавить
        </button>
       </div>
      </form>
      <ul className="">
       {list.map((item) => (
        <li key={item.id}>{item.text}</li>
       ))}
      </ul>
     </Container>
    </main>
    <Footer />
   </TheWrapper>
  </>
 );
}

export default App;
