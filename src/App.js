import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Services from './components/Services';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
      
      
    </div>
  );
}

export default App;
