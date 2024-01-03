import { Wrapper, Container } from '../components/common';
import Header from '../components/header';
import Footer from '../components/footer';

function Home() {
 return (
  <Wrapper>
   <Header />
   <main>
    <section>
     <Container>test</Container>
    </section>
   </main>
   <Footer />
  </Wrapper>
 );
}

export default Home;
