import { Wrapper, Container } from './components/common';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';
import { useState, useRef } from 'react';
import InputField from './components/InputField';

function App() {
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
      <div className="pt-[10px] pb-[100px]">
       <h1 className="text-[40px] font-700 text-center mb-[30px]">To Do</h1>
       <InputField area={area} addTodo={addTodo} areaReset={areaReset} />
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

export default App;
