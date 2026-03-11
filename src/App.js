import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About'; 
import Service from './pages/Service';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Header/>
    <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/> 
       <Route path="service" element={<Service/>}/> 
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
