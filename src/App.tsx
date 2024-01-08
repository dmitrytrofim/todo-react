import { Wrapper, Container } from './components/common';
import TodoList from './components/TodoList';

import InputField from './components/InputField';

function App() {
 return (
  <Wrapper>
   <main>
    <section>
     <Container>
      <div className="pt-[10px] pb-[100px]">
       <h1 className="text-[40px] font-700 text-center mb-[30px]">To Do</h1>
       <InputField />
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
