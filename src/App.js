import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import About from './About';
import Home from './Home';
import Shop from './Shop';
import './App.css';
import Contact from './Contact';


function App(){

  return <Router>
  <nav>
  <Link to="/"className="link">Home</Link>
  <Link to="/about" className="link">About</Link>
  <Link to="/contact" className="link">Contact</Link>
  <Link to="/shop"className="link">Shop</Link>
  </nav >
  <Routes>
    <Route path="/"element={<Home/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/contact"element={<Contact/>}/>
      <Route path="/shop"element={<Shop/>}/>
     </Routes>
    
    </Router>
    }




export default App;

