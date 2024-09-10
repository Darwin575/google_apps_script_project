import React, { useState } from 'react';
import DocumentViewer from './IPDdocs';

// Hard-coded file data
const fileData = [
  { name: 'LEGAL OPINION ON REPORTING, NOTIFICATION, AND REFERRAL REQUIREMENTS UPON RELEASE OF PDL', url: 'https://drive.google.com/file/d/1xgmGOhdEtc-Wsm1hxE7I3FuAjigilcfp/view' },
  { name: 'INVENTORY OF RECORDS OF IP, AND REITERATION OF THE MEMO: TRANSFER OF PDL TO BUCOR', url: 'https://drive.google.com/file/d/14h6WMwgiRoWtAlBohwRdj0A77v54TV6G/view' },
  { name: 'DISSEMINATION OF OCA CIRCULAR NOS. 283-2023, 266-2023 & 260-2023', url: 'https://drive.google.com/file/d/1TMmvyvAwhI3JtSYajUWhADqP_LGoen2O/view' },
  { name: 'SUBMISSION OF DOCUMENTS PERTAINING TO INSULAR PRISONERS', url: 'https://drive.google.com/file/d/1WD-nTaZCUeGunCVqYVvY6WqHeFkSumlA/view' },
  { name: 'GUIDELINES IN GRANTING TASTM TO PDL', url: 'https://drive.google.com/file/d/1KlSSrdxubIoctTuOZZbiaT2Yfn95JqHy/view' },
  { name: 'OCA CIRCULAR NO. 201-2022 NON-ISSUANCE OF RELEASE ORDER UPON COMPLETION OF SERVICE OF SENTENCE', url: 'https://drive.google.com/file/d/1trx-DpDc5z8b0J92pGCIjmVz9_9RDyVZ/view' },
  { name: 'INFORMATION ON THE EFFECTS AND PENALTIES OF CONTEMPT OF COURT', url: 'https://drive.google.com/file/d/1GE8pik-pfICTzU-7yTnB53K1jfy4-rGa/view' },
  { name: 'SUBMISSION OF AFTER ACTIVITY REPORTS', url: 'https://drive.google.com/file/d/1vp4FZWIDYluZa3DEBEgPvK8j-2ORB6ZZ/view' },
  { name: 'DESIGNATION OF ALTERNATE JAIL PARALEGAL OFFICER', url: 'https://drive.google.com/file/d/1iuQYth6cjkCU7phW54EcfCI8xNKpb-ZR/view' },
  { name: 'SIGNATION OF PDL ORIENTATION AREA', url: 'https://drive.google.com/file/d/1IwqXkIoeW3Zyr7VOao3Z-vTUdDMFZomo/view' },
  { name: 'IMPLEMENTATION OF THE 2019 REVISED OPERATING MANUAL ON CPI AND TA FOR PDL', url: 'https://drive.google.com/file/d/1ckXn4-0toIs9HUaUoj2qnIaAA_a_2PTk/view' },
  { name: 'REITERATION RE: AUTHORITY TO DESIGNATE, ASSIGN AND RELIEF PARALEGAL OFFICERS', url: 'https://drive.google.com/file/d/1bjWlvUBmkQaUBz2eD-uCJrHe92TTBspj/view' },
  { name: 'PARALEGAL CORNER DESIGN - GUIDE', url: 'https://drive.google.com/file/d/1_gVHWzTXNIMBADMFF-otxnJPRzWKxjuf/view' },
  { name: 'PARALEGAL BEST PRACTICES (2021 ED)', url: 'https://drive.google.com/file/d/15sjNR6whLQv8MN_6yvNWyw9nbWCZ_BOh/view' },
  { name: 'MGA KATUNGOD SA AKUSADO, MGA KATUNGOD SA PDL, & MGA PRIBILEHIYO SA PDL', url: 'https://drive.google.com/drive/folders/1Jzl3P0VkDo5O-xtnCqcFKAGY2OyLIUI_' },
  { name: 'JAIL PARALEAGAL INSPECTION CHECKLIST', url: 'https://drive.google.com/file/d/10JlEzUJ59OIZMv03ZG01jYzHu_F-gT_9/view' },
  // Add more files as needed
];

const IPD = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2>IMPORTANT PARALEGAL DIRECTIVES</h2>
      </header>
      <div style={styles.main}>
        <div style={styles.sidebar}>
          <h3 style={styles.fileListHeader}>File List</h3>
          <ul style={styles.fileListUl}>
            {fileData.map((file) => (
              <li key={file.url} style={styles.fileListItem}>
                <button
                  style={styles.fileButton}
                  onClick={() => handleFileClick(file)}
                >
                  {file.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div style={styles.content}>
          {selectedFile && (
            <DocumentViewer
              url={selectedFile.url}
              title={selectedFile.name}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// Inline styles for IPD
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    height: '100vh',
  },

  header: {
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  },

  main: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
  },

  sidebar: {
    flex: '1',
    minWidth: '200px',
    maxWidth: '300px',
    marginRight: '20px',
  },

  fileListHeader: {
    marginBottom: '10px',
    color: '#444',
  },

  fileListUl: {
    listStyleType: 'none',
    padding: 0,
  },

  fileListItem: {
    margin: '10px 0',
  },

  fileButton: {
    background: 'none',
    border: 'none',
    color: '#1a73e8',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: '16px',
    padding: 0,
    fontFamily: 'Arial, sans-serif',
    textAlign: 'left',
  },

  content: {
    flex: '3',
  },

  '@media only screen and (max-width: 768px)': {
    main: {
      flexDirection: 'column',
    },

    sidebar: {
      marginRight: '0',
      marginBottom: '20px',
    },

    content: {
      flex: '1',
    },
  },

  '@media only screen and (max-width: 480px)': {
    content: {
      flex: '1',
    },
  },
};



export default IPD;
