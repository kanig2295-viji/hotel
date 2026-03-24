import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About'; 
import Service from './pages/Service';
import Contact from './pages/Contact';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Favorite from './pages/Favorite';
import Rooms from './pages/Rooms'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Header/>
    <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/> 
       <Route path="service" element={<Service/>}/> 
       <Route path="contact" element={<Contact/>}/> 
       <Route path="favorite" element={<Favorite/>}/>
       <Route path="rooms" element={<Rooms/>}/> 
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
