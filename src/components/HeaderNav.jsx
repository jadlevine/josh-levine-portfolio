import { Link } from 'react-router-dom'
import cutout from '../assets/JoshLevineCutout.png'
import { useLocation } from 'react-router-dom'

const HeaderNav = (props) => {
  const location = useLocation()

  const currentPath = 'nav-option currentPath'
  const notCurrentPath = 'nav-option'

  return (
      <nav className='header'>
      <div className="nav-header">
        <img id="headshot" src={cutout} alt="josh-levine"></img>
        <h1>JOSH LEVINE</h1>
      </div>
        <div className="nav-options">
          <Link to="/" className={location.pathname==='/'?currentPath:notCurrentPath}>Home</Link>
          <Link to="/projects" className={location.pathname==='/projects'?currentPath:notCurrentPath}>Projects</Link>
          <Link to="/resume" className={location.pathname==='/resume'?currentPath:notCurrentPath}>Resume</Link>
          {/* <Link to="/contact" className='nav-option'>Contact</Link> */}
        </div>
      </nav>
  )
}

export default HeaderNav