import './App.css';
import { Routes, Route } from "react-router-dom";

import About from './Components/About';
import Gallery from './Components/Gallery';
import Home from './Components/Home';
import Social from './Components/Social/Social';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Gallery" element={<Gallery />} />
        <Route path="Social" element={<Social />} />
      </Routes>
    </div>
  );
}

export default App;
