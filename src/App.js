import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Footer from './Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
   </Routes>
   <Footer />  
    </BrowserRouter>

  );
}

export default App;
