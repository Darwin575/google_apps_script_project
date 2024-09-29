// import React from 'react';

// const DocumentViewer = ({ url, title }) => {
//   if (!url) {
//     return <p>No document selected.</p>;
//   }

//   const embedUrl = url.includes('/view') ? url.replace('/view', '/preview') : url;

//   return (
//     <div>
//         <div>
//         <h3>Document Preview</h3>
//       <iframe
//         src={embedUrl}
//         title={title}
//         allowFullScreen
//         style={{ width: '125%', height: '70vh', border: '0', transform: 'scale(0.75)', transformOrigin: '0 0', marginLeft: '20px'}}
//       >
//         {/* This browser does not support iframes. Please download the document to view it: <a href={url} target="_blank" rel="noopener noreferrer">Download Document</a>. */}
//       </iframe>
//         </div>    
//     </div>
//   );
// };

// export default DocumentViewer;


import React from 'react';
import styled from 'styled-components';

const DocumentViewer = ({ url, title }) => {
  if (!url) {
    return <p>No document selected.</p>;
  }

  const embedUrl = url.includes('/view') ? url.replace('/view', '/preview') : url;

  return (
    <DocumentViewerContainer>
      <ViewerHeader>Document Preview</ViewerHeader>
      <IframeWrapper>
        <Iframe
          src={embedUrl}
          title={title}
          allowFullScreen
        >
          This browser does not support iframes. Please download the document to view it: <a href={url} target="_blank" rel="noopener noreferrer">Download Document</a>.
        </Iframe>
      </IframeWrapper>
    </DocumentViewerContainer>
  );
};

const DocumentViewerContainer = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: 100%;
  overflow: hidden;
  max-height: 80vh;
  box-sizing: border-box;
  @media (max-width: 480px) {
    width: 88%;
    
  }
`;

const ViewerHeader = styled.h3`
  margin-bottom: 0px;
  border-bottom: 2px solid #1a73e8;
  padding-bottom: 10px;
  box-sizing: border-box;
  color: #444;
`;

const IframeWrapper = styled.div`
  width: 190%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding-top: 180%;
  border-radius: 5px;
  margin-left: 400px;
  background: #f1f1f1;
  @media (max-width: 480px) {
    // width: 100%;
    margin-right: 35px;
    
  }
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150%;
  margin: 2%;
  overflow-x: visible;
  transform: scale(0.75);
  border: 0;

  @media (max-width: 480px) {
    width: 75%;
    transform: scale(0.70);
    
  }

  @media (max-width: 768px) {
    transform: scale(0.60);
  
  }
`;


export default DocumentViewer;


