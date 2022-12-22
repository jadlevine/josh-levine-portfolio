import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      <FontAwesomeIcon
        icon={faDownload}
        className="icon"
        size="3x"
        // transform="grow-2"
      ></FontAwesomeIcon>
    </div>
  )
}

export default Resume
