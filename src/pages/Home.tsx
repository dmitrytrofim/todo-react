import { Wrapper, Container } from '../components/common';
import TodoList from '../components/TodoList';
import { v4 as uuidv4 } from 'uuid';
import { useState, useRef } from 'react';

function Home() {
 interface ToDo {
  id: string;
  text: string;
  completed: boolean;
 }
 const [todos, setTodos] = useState<Array<ToDo>>([]);
 const area = useRef<HTMLTextAreaElement>(null);

 const areaReset = () => {
  area.current!.value = '';
  area.current?.focus();
 };
 const addTodo = () => {
  if (!area.current!.value.trim()) return;
  setTodos([
   ...todos,
   {
    id: uuidv4(),
    text: area.current!.value,
    completed: false,
   },
  ]);
  areaReset();
 };
 const completeTodo = (todoId: string) => {
  setTodos(
   todos.map((todo) => {
    if (todo.id !== todoId) return todo;
    return {
     ...todo,
     completed: !todo.completed,
    };
   })
  );
 };
 const deleteTodo = (todoId: string) => {
  setTodos(todos.filter((todo) => todoId !== todo.id));
 };

 return (
  <Wrapper>
   <main>
    <section>
     <Container>
      <div className="py-[10px]">
       <h1 className="text-[40px] font-700 text-center mb-[30px]">To Do</h1>
       <div className="mb-[20px]">
        <textarea
         ref={area}
         className="flex w-full h-[100px] text-[20px] outline-none border-[1px] rounded-[5px] p-[10px] mb-[20px] resize-none"
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
       <div className="flex flex-col gap-[5px]">
        <TodoList
         todos={todos}
         completeTodo={completeTodo}
         deleteTodo={deleteTodo}
        />
       </div>
      </div>
     </Container>
    </section>
   </main>
  </Wrapper>
 );
}

export default Home;
