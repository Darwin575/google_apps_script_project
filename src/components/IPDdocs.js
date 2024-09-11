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

const DocumentViewer = ({ url, title }) => {
  if (!url) {
    return <p>No document selected.</p>;
  }

  const embedUrl = url.includes('/view') ? url.replace('/view', '/preview') : url;

  return (
    <div style={styles.documentViewer}>
      <h3 style={styles.viewerHeader}>Document Preview</h3>
      <div style={styles.iframeWrapper}>
        <iframe
          src={embedUrl}
          title={title}
          style={styles.iframe}
          allowFullScreen
        >
          This browser does not support iframes. Please download the document to view it: <a href={url} target="_blank" rel="noopener noreferrer">Download Document</a>.
        </iframe>
      </div>
    </div>
  );
};

// Inline styles for DocumentViewer
const styles = {
    documentViewer: {
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '95%',
      height: '100%',
      maxHeight: '80vh',
      overflowX: 'hidden',
      
    },
  
    viewerHeader: {
      marginBottom: '0px',
      borderBottom: '2px solid #1a73e8',
      paddingBottom: '10px',
      color: '#444',
    },
  
    iframeWrapper: {
      width: '190%',
      position: 'relative',
      paddingTop: '180%', 
      overflow: 'hidden',
      borderRadius: '5px',
      marginLeft: '400px',
      background: '#f1f1f1',
    },
  
    iframe: {
      position: 'absolute',
      top: '0%',
      left: 0,
      width: '100%',
      height: '150%',
      //  width: '125%', 
      //  height: '140vh',
      border: '0',
      margin: '3%'
    },   
  };
  


export default DocumentViewer;

