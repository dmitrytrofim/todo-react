import { Wrapper, Container } from './components/common';
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';

function App() {
 // const fieldReset = () => {
 //  area.current!.value = '';
 //  area.current?.focus();
 // };
 const dispatch = useDispatch();
 const addTask = () => {
  dispatch(addTodo(''));
 };

 // const completeTodo = (todoId: string) => {
 //  setTodos(
 //   todos.map((todo) => {
 //    if (todo.id !== todoId) return todo;
 //    return {
 //     ...todo,
 //     completed: !todo.completed,
 //    };
 //   })
 //  );
 // };
 // const deleteTodo = (todoId: string) => {
 //  setTodos(todos.filter((todo) => todoId !== todo.id));
 // };

 return (
  <Wrapper>
   <main>
    <section>
     <Container>
      <div className="pt-[10px] pb-[100px]">
       <h1 className="text-[40px] font-700 text-center mb-[30px]">To Do</h1>
       <InputField addTask={addTask} />
       <div className="flex flex-col gap-[5px]">
        <TodoList />
       </div>
      </div>
     </Container>
    </section>
   </main>
  </Wrapper>
 );
}

export default App;
