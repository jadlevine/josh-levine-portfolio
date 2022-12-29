// import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
// import { Document, Page, pdfjs } from 'react-pdf'
// import SinglePagePDFViewer from '../components/single-page'
import AllPagesPDFViewer from '../components/all-pages'
import resume from '../assets/Josh-Levine-Resume.pdf'

const Resume = () => {
  const downloadResume = () => {
    fetch(resume).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob)
        // Setting various property values
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = resume
        alink.click()
      })
    })
  }

  return (
    <div className="page-body">
      <div className="page-body-top"></div>
      <div className="resume-download clickable" onClick={downloadResume}>
        Download a copy: <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
      </div>

      <div className="all-page-container">
        <AllPagesPDFViewer pdf={resume} />
      </div>

      <div className="page-body-bottom"></div>
    </div>
  )
}

export default Resume
