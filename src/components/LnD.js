import React from 'react';

const LnD = ({ setCurrentPage }) => {
  return (
    <div>
      <h2>LEARNING & DEVELOPMENT</h2>
      <div className="container">
        <div 
          className="item" 
          onClick={() => setCurrentPage('EPLM')} // Set the current page when clicked
        >
          <img 
            src="https://i.postimg.cc/ht9X8p9Q/logo-3.png" 
            alt="Download EPLM" 
          />
          <h3>DOWNLOAD EPLM</h3>
          <h6>Automatic Download | 1.6 GB</h6>
        </div>
        <div 
          className="item" 
          onClick={() => setCurrentPage('MLV1')} // Set the current page when clicked
        >
          <img 
            src="https://i.postimg.cc/9FwR0W0p/logo-3.png" 
            alt="Microlearning Series V.1" 
          />
          <h3>MICROLEARNING SERIES V.1</h3>
          <h6>For New Jail Paralegal Officers</h6>
        </div>
        <div 
          className="item" 
          onClick={() => setCurrentPage('MLV2')} // Set the current page when clicked
        >
          <img 
            src="https://i.postimg.cc/9FwR0W0p/logo-3.png" 
            alt="Microlearning Series V.2" 
          />
          <h3>MICROLEARNING SERIES V.2</h3>
          <h6>Downloads only</h6>
        </div>
      </div>
    </div>
  );
};

export default LnD;
