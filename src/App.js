import './App.css';
import Introduction from './components/introduction/Introduction';
import Header from './components/header/Header';
import Features from './components/features/Features';
import Help from './components/help/Help';
import Getstart from './components/getstart/Getstart';
import Footer from './components/footer/Footer';
import Bottom from './components/bottom/Bottom';
import Testimonial from './components/testimonial/Testimonial';


function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Features />
      <Testimonial />
      <Help />
      <Getstart />
      <Footer />
      <Bottom />
    </div>
  );
}

export default App;
