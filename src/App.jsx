import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import TravelGuide from './TravelGuide';
import SafetyGuide from './SafetyGuide';
import About from './About';
import USA from './USA/USA';
import London from './London/London';
import Lasvegas from './Lasvegas/Lasvegas';
import Amsterdam from './Amsterdam';
import Newyork from './Newyork/Newyork';
import California from './California/California';
import Islington from './Islington/Islington';
import Thesquaremile from './The-Square-Mile/Thesquaremile';
import Bromley from './Bromley/Bromley';
import Rotterdam from './Rotterdam/Rotterdam';
import Eindhoven from './Eindhoven/Eindhoven';
import Denbosch from './Denbosch/Denbosch';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>

        <Route path="/travel-guide" element={<TravelGuide/>} />
        <Route path="/safety-guide" element={<SafetyGuide/>} />
        <Route path="/back" element={<About/>} />
          
        <Route path="/usa" element={<USA/>} />
        <Route path="/london" element={<London/>} />
        <Route path="/amsterdam" element={<Amsterdam/>} />
 
        <Route path="/newyork" element={<Newyork/>} />
        <Route path="/lasvegas" element={<Lasvegas/>} />
        <Route path="/california" element={<California/>} />

        <Route path='/islington' element={<Islington/>} />
        <Route path='/thesquaremile' element={<Thesquaremile/>} />
        <Route path='/bromley' element={<Bromley/>} />
  
        <Route path='/rotterdam' element={<Rotterdam/>} />
        <Route path='/eindhoven' element={<Eindhoven/>} />
        <Route path='/denbosch' element={<Denbosch/>} />
 
        <Route path="/backtousa" element={<USA/>} />
        <Route path="/backtohome" element={<Home/>} />
                                  
      </Routes>    
      <Footer />
    </>
  );
}

export default App;
