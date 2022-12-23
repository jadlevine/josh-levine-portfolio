import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
// import { Document, Page, pdfjs } from 'react-pdf'
import SinglePagePDFViewer from '../components/single-page'
import AllPagesPDFViewer from '../components/all-pages'

import resume from '../assets/Josh-Levine-Resume.pdf'

const Resume = () => {
  /**
   * YOU ARE HERE
   *
   * RESUME is viewable as PDF
   * need to style it up
   * decide on single page or all page view
   * add download options for ATS friendly AND with hyperlinks
   *
   * Make hyperlinks work in pdf??
   * */

  return (
    <div className="page-body">
      <div className="page-body-top"></div>
      <h1>Resume</h1>
      <h4>Single Page</h4>
      <SinglePagePDFViewer pdf={resume} />

      <hr />

      {/* <h4>All Pages</h4>
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={resume} />
      </div> */}

      <hr />
      {/* <Document file="https://drive.google.com/file/d/1P6SNlFOCujSXBSoM3cEA2iEWOYephMs3/view?usp=sharing"> */}
      {/* <Document file={resume}>
        <Page pageNumber={1} />
        <Page pageNumber={2} />
      </Document> */}

      <FontAwesomeIcon
        icon={faDownload}
        className="icon"
        size="3x"
        // transform="grow-2"
      ></FontAwesomeIcon>
      <div className="page-body-bottom"></div>
    </div>
  )
}

export default Resume
