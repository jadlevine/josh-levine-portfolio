import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
// import { Document, Page, pdfjs } from 'react-pdf'
import SinglePagePDFViewer from '../components/single-page'
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
      <div className="resume-download" onClick={downloadResume}>
        Download a copy:{' '}
        <FontAwesomeIcon
          icon={faDownload}
          // className="icon"
          size="2x"
        ></FontAwesomeIcon>
      </div>

      {/* <h4>Single Page</h4> */}
      {/* <SinglePagePDFViewer pdf={resume} /> */}

      {/* <hr /> */}

      {/* <h4>All Pages</h4> */}
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={resume} className="resume-pdf" />
      </div>

      {/* <hr /> */}
      {/* <Document file="https://drive.google.com/file/d/1P6SNlFOCujSXBSoM3cEA2iEWOYephMs3/view?usp=sharing"> */}
      {/* <Document file={resume}>
        <Page pageNumber={1} />
        <Page pageNumber={2} />
      </Document> */}

      <div className="page-body-bottom"></div>
    </div>
  )
}

export default Resume
