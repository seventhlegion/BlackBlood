import './App.css';
import Header from './Components/Header';
import Section1 from './Components/Section-1';
import Quote from './Components/Quote';
import Footer from './Components/Footer';
import Section2 from './Components/Section-2';
import MultipleItems from './Components/React-Slick';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Section1 />
        <Section2 />
        <MultipleItems />
        <Quote/>
        <Footer />
      </div>
    </>
  );
}

export default App;
