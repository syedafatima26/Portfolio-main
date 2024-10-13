import React from 'react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Router>
    <Navbar/>
        <Routes>
         <Route path="/" Component={Home}></Route>
         <Route path="/Portfolio" Component={Portfolio}></Route>
         <Route path="/contact" Component={Contact}></Route>
         </Routes>
    </Router>
    </>
  );
}

export default App;
