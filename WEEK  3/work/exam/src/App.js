import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from '../src/Home';
import './App.css';
import Footer from './components/footer.components';
import Navbar from './components/navbar.components';

import NotFound from './pages/NotFound.page';




  function App() {
    return (
      <div className="App">
      <Router>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
      <Footer/>
      </Router>
     
     <NotFound/>
     
     
    
     </div>

    
    );
  }
  
export default App;

