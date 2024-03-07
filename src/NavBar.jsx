import React from 'react';
import Home from './Home.jsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navbar.css';

function NavBar({ planets }) {

  const [display, setDisplay] = useState(false)

  function handleClick() {
    return setDisplay()
  }

  const stylesHamburger = {
    background: display? `#FC6736` : `#F39F5A`
  }

  const stylesline1 = {
    transform: display? `rotate(45deg) translate(0.85em, 1em)` : `rotate(0)`,
    transition: display? `transform ease-in-out .2s`: `transform ease-in-out .2s`                                  
  }

  const stylesline2 = {
    transform: display? `scale(0.01)` : 'rotate(0)'
  }

  const stylesline3 = {
    transform: display? `rotate(135deg) translate(-0.8em, 1em)` : `rotate(0)`,
    transition: display? `transform ease-in-out .2s`: `transform ease-in-out .2s`
  }

  const planetId = planets.map((planet,idx) => (
    <Link className='nav-link' onClick={handleClick} key={idx} to={`/${planet}`}>{planet}</Link> 
  ));

  return (
  <>
    <header>
        <h1 className='title'>The Solar System</h1>
        <div 
        style={stylesHamburger}
        className='hamburger-menu'
        onClick={() => setDisplay((prev) => !prev)}
        >  
          <div style={stylesline1} className='line line1'></div>
          <div style={stylesline2} className='line line2'></div>
          <div style={stylesline3} className='line line3'></div>
        </div>
    </header>
    <div className='hamburger-container'>
      <nav className={`nav-menu${display ? ' show-menu' : ''}`}>
        <Link className='nav-link' to='/' onClick={handleClick} element={<Home/>}>Home</Link>
        {planetId}
        {/* <Link className='nav-link' to='/PlanetInfo' element={planetId}>{planets.map(planet => planet)}</Link> */}
      </nav>
    </div>
  </>  
  )
}

export default NavBar