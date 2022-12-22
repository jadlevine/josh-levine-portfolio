import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
// import { Document, Page, pdfjs } from 'react-pdf'
import SinglePagePDFViewer from '../components/single-page'
import AllPagesPDFViewer from '../components/all-pages'

import resume from '../assets/Josh-Levine-Resume.pdf'

const Resume = () => {
  // useEffect(() => {
  //   pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
  // }, [])

  return (
    <div>
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
    </div>
  )
}

export default Resume
