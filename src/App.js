import './App.css';
import NavBar from './NavBar.jsx';
import PlanetInfo from './PlanetInfo.jsx';
import Icons from './Icons.jsx';
import Home from './Home.jsx';
import { Routes, Route} from "react-router-dom";


function App() {
const planets = [
  'Venus',
  'Mercury',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Neptune',
  'Uranus',
  'Pluto'
]

const planetId = planets.map((planet,idx) => ( 
<Route key={idx} path={`/${planet}`} element={<PlanetInfo planet={planet}/>}>{planet}</Route>
)) 

  return (
    <div className="App">
      <NavBar planets={planets}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {planetId}
      </Routes>
      <Icons/>
    </div>
  );
}

export default App;
