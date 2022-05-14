import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// react router
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import Music from './Music';
import Player from './Player';
import Buy from './Buy';
import Contact from './Contact';


const App = () => {
return (
    <>
        <BrowserRouter>
    <div className='Navandtitle'>
             
        <nav className='Nav'>
                    <Link to="/" className='Navbar-link'>Home</Link>
                     <Link to="/About" className='Navbar-link'>About</Link>
                    <Link to="/Music" className='Navbar-link'>Music</Link>
                    <Link to="/Player" className='Navbar-link'>Player</Link>
                    <Link to="/Buy" className='Navbar-link'>Buy</Link>
                    <Link to="/Contact" className='Navbar-link'>Contact</Link>
                  
<img src={require("./mite-portrait.png")} className="icon"/>

        </nav>
     
    </div>
          <div className='Main-banner-background'>
         0
</div>
<div className='background-title'>
      
          <h1 className='Title'>mite</h1>
                                          </div>  
    <Routes>
<Route  path="/" element={<Home />} >
</Route>
<Route  path="about/" element={<About />}>
</Route>
<Route  path="music/" element={<Music />}>
</Route>
<Route  path="player/" element={<Player />}>
</Route>
<Route  path="buy/" element={<Buy />}>
</Route>
<Route  path="contact/" element={<Contact />}>
</Route>
</Routes>
</BrowserRouter>
</>
)
};

export default App;