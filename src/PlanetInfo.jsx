import React from 'react';
import NavBar from './NavBar.jsx';
import { useEffect, useState } from 'react';

function PlanetInfo({ planet }) {
    let [displayInfo, setDisplayInfo] = useState('')

useEffect(() => {
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`)
        .then(res => res.json())
        .then(res => console.log(res))
}, [])



  return (
    <div className='Container'>
        <main>{displayInfo}</main>
    </div>
  )
}

export default PlanetInfo;