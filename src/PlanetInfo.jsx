import React from 'react';
import { useEffect, useState } from 'react';
import './planetinfo.css';

function PlanetInfo({ planet }) {
    let [displayInfo, setDisplayInfo] = useState('')

useEffect(() => {
function getInfo() {fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`)
        .then(res => res.json())
        .then(res => setDisplayInfo(res))}
    getInfo()
}, [displayInfo])

  return (
    <div className='info-container'>
        <main>
          <h3>{displayInfo.englishName}</h3>
          <article>
            <p>Sideral orbit: {displayInfo.sideralOrbit} days</p>
            <p>Sideral Rotation: {displayInfo.sideralRotation} hrs</p>
            <p>Total amount of moons: {displayInfo.moons?.length || "no moons"}</p>
            <p>Radius: {displayInfo.meanRadius} km</p>
            <p>Aphelion(at it's farthest from the sun): {displayInfo.aphelion}km </p>
            <p>Perihelion(at it's closest from the sun): {displayInfo.perihelion}km</p>
          </article>
        </main>
    </div>
  )
}

export default PlanetInfo;