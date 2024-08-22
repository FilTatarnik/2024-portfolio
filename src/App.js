import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <LandingPage />
        <Hero />
        <AboutUs />



        <Footer />
      </header>
    </div>
  );
}

export default App;
