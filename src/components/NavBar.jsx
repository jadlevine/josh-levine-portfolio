import { Link } from 'react-router-dom'
import cutout from '../assets/JoshLevineCutout.png'

const NavBar = (props) => {
  return (
      <nav className='nav'>
      <div className="nav-header">
        <img id="headshot" src={cutout} alt="josh-levine"></img>
        <h1>JOSH LEVINE</h1>
      </div>
      conditionally render links based on which page is selected <Link to="https://www.johnandrewjacobs.com/about">example</Link>
        <div className="nav-options">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
  )
}

export default NavBar