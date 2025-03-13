import TheWrapper from '@/containers/TheWrapper';
import Header from '@/containers/TheHeader';
import Footer from '@/containers/TheFooter';
import Container from '@/containers/Container';
import ControlPanel from '@/components/ControlPanel';
import ListTodos from '@/components/ListTodos';

function App() {
 return (
  <>
   <TheWrapper>
    <Header />
    <main className="p-[20px]">
     <Container>
      <h1 className="text-[30px] font-600 text-center mb-[20px]">ToDo</h1>
      <ControlPanel />
      <ListTodos />
     </Container>
    </main>
    <Footer />
   </TheWrapper>
  </>
 );
}

export default App;
