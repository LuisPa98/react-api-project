import React from 'react';
import Home from './Home.jsx';
import { Link } from 'react-router-dom';
import PlanetInfo from './PlanetInfo.jsx';

function NavBar({ planets }) {

  const planetId = planets.map((planet,idx) => (
    <Link className='nav-link'  key={idx} to={`/${planet}`}>{planet}</Link> 
  ));



  return (
    <header>
        <h1>The Solar System</h1>
        <nav>
          <Link className='nav-link' to='/' element={<Home/>}>Home</Link>
          {planetId}
          {/* <Link className='nav-link' to='/PlanetInfo' element={planetId}>{planets.map(planet => planet)}</Link> */}
        </nav>
    </header>
  )
}

export default NavBar