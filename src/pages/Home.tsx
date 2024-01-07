import { Wrapper, Container } from '../components/common';
import Header from '../components/header';
import Footer from '../components/footer';
import { v4 as uuidv4 } from 'uuid';
import { useState, useRef } from 'react';

function Home() {
 interface ToDo {
  id: string;
  text: string;
  complete: boolean;
 }
 const [todos, setTodos] = useState([]);
 const area = useRef<HTMLTextAreaElement>(null);

 const areaReset = () => {
  area.current!.value = '';
  area.current?.focus();
 };
 const todo: ToDo = {
  id: uuidv4(),
  text,
  completed: false,
 };
 const addTodo = () => {
  if (!area.current!.value) return;
  setTodos([...todos, todo]);
  // areaReset();
 };
 // const complete = () => {};

 return (
  <Wrapper>
   <Header />
   <main>
    <section>
     <Container>
      <div className="pt-[10px]">
       <h1 className="text-[40px] font-700 text-center mb-[30px]">To Do</h1>
       <div className="mb-[20px]">
        <textarea
         ref={area}
         className="flex w-full h-[150px] text-[20px] outline-none border-[1px] rounded-[5px] p-[10px] mb-[10px] resize-none"
        ></textarea>
        <div className="flex items-center justify-center gap-[30px]">
         <button
          onClick={addTodo}
          className="border-[2px] rounded-[5px] p-[5px]"
          type="button"
         >
          Добавить
         </button>
         <button
          onClick={areaReset}
          className="border-[2px] rounded-[5px] p-[5px]"
          type="button"
         >
          Очистить
         </button>
        </div>
       </div>
       <div className="flex flex-col gap-[5px]">{todos}</div>
      </div>
     </Container>
    </section>
   </main>
   <Footer />
  </Wrapper>
 );
}

export default Home;

{
 /* <div key={uuidv4()} className="flex items-center gap-[7px]">
    <input className="shrink-0 w-[18px] h-[18px]" type="checkbox" />
    <p className="grow text-[20px] p-[10px] border-[1px] rounded-[5px]">
     {area.current!.value}
    </p>
   </div> */
}
