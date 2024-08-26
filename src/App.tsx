import Container from './components/Container';
import ControlPanel from './components/ControlPanel';
import TextField from './components/TextField';
import TodoList from './components/TodoList';

function App() {
 return (
  <>
   <main>
    <Container>
     <h1 className="text-[30px] font-700 text-center pt-[10px] mb-[20px]">
      ToDo
     </h1>
     <TextField styleCls="mb-[20px]" />
     <ControlPanel styleCls="mb-[20px]" />
     <TodoList />
    </Container>
   </main>
  </>
 );
}

export default App;
