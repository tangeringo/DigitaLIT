import { useState } from 'react';
import { Document, Page } from 'react-pdf';

import pdf from '../data/sample.pdf'

import "../styles/DisplayBookInfoPage.styles.scss"

function DisplayBookInfo() {
  const [numPages, setNumPages] = useState();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div style={{padding: "50px 25% 50px", backgroundColor: "#dedede", marginTop: "50px"}}>
        <p> Page 1 of {numPages} </p>
        <Document style={{display: "flex", margin: " auto"}} file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.apply(null, Array(numPages))
            .map((_, i) => i + 1)
            .map((page, idx) => (
                <Page key={idx} pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false}/>
            ))}
      </Document>
    </div>
  );
}

export default DisplayBookInfo;


// Adobe PDF Embed API =>  https://developer.adobe.com/document-services/docs/overview/pdf-embed-api/