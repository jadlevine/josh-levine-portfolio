import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faSlack
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const ContactFooter = () => {
  return (
    <div id="footer">
      <div id="footer-title">Contact Me</div>
      <div className='contact-row'>
        <a href="https://github.com/jadlevine">
          <FontAwesomeIcon
            icon={faGithub}
            className="icon clickable"
          />
        </a>
        <a href="https://www.linkedin.com/in/joshua-adam-levine/">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="icon clickable"
          />
        </a>
        <a href="mailto:levine.joshuaadam@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="icon clickable"
          />
        </a>
      </div>
      <p id="footer-tag-line">2022 - Josh Levine</p>
    </div>
  )
}

export default ContactFooter