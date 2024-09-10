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
      width: '100%',
      height: 'auto',
      maxHeight: '80vh',
    },
  
    viewerHeader: {
      marginBottom: '20px',
      borderBottom: '2px solid #1a73e8',
      paddingBottom: '10px',
      color: '#444',
    },
  
    iframeWrapper: {
      width: '100%',
      position: 'relative',
      paddingTop: '56.25%', // Aspect ratio of 16:9
      overflow: 'hidden',
      borderRadius: '5px',
      background: '#f1f1f1',
    },
  
    iframe: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: '0',
      marginLeft: '60px'
    },
  
    '@media only screen and (max-width: 768px)': {
      iframeWrapper: {
        paddingTop: '75%', // Adjust aspect ratio for smaller screens
      },
    },
  
    '@media only screen and (max-width: 480px)': {
      iframeWrapper: {
        paddingTop: '100%', // Ensure iframe takes as much height as possible on very small screens
      },
    },
  };
  

export default DocumentViewer;

