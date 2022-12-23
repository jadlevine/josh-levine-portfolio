import { Link } from 'react-router-dom'
import cutout from '../assets/JoshLevineCutout.png'
import headshot from '../assets/JoshLevine.jpg'
import { useLocation } from 'react-router-dom'

const HeaderNav = () => {
  const location = useLocation()

  const currentPath = 'nav-option clickable currentPath'
  const notCurrentPath = 'nav-option clickable'

  return (
    <div id='header'>
      <div id="nav-header">
        <img id="header-image" src={headshot} alt="josh-levine"></img>
        <div id="header-name">JOSH LEVINE</div>
      </div>
        <div className="nav-options">
          <Link to="/" className={location.pathname==='/'?currentPath:notCurrentPath}>ABOUT</Link>
          <Link to="/skills" className={location.pathname==='/skills'?currentPath:notCurrentPath}>SKILLS</Link>
          <Link to="/projects" className={location.pathname==='/projects'?currentPath:notCurrentPath}>PROJECTS</Link>
          <Link to="/resume" className={location.pathname==='/resume'?currentPath:notCurrentPath}>RESUME</Link>
          <Link to="/contact" className={location.pathname==='/contact'?currentPath:notCurrentPath}>CONTACT</Link>
          {/* <Link to="/contact" className='nav-option'>Contact</Link> */}
        </div>
      </div>
  )
}

export default HeaderNav