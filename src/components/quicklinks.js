import React from 'react';
import '../styles/home_page.scss';

function Quicklinks({ setCurrentPage }) {
  return (
    <div>
      <h2>QUICKLINKS</h2>
      <div className="container">
        <div 
          className="item" 
          onClick={() => setCurrentPage('JDLC')}
        >
          <img 
            src="https://i.postimg.cc/0QgVYdFb/qicon-1.png" 
            alt="Justice Datalab Corner" 
          />
          <h3>JUSTICE DATALAB CORNER</h3>
          <h6>Link per Jail | Data Studio | User Guide</h6>
        </div>
        <div 
          className="item" 
          onClick={() => setCurrentPage('AAR')}
        >
          <img 
            src="https://i.postimg.cc/5ybpG9xJ/qicon-2.png" 
            alt="AAR Submission Drive" 
          />
          <h3>AAR SUBMISSION DRIVE</h3>
          <h6>Submit/Upload your AAR here</h6>
        </div>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLScyR8pHcWHbFa0DrsIbTp0q1dZeLF4V7oZkRGrke3n-NmyB6Q/viewform" 
          className="item"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src="https://i.postimg.cc/fLxBBSQ5/qicon-3.png" 
            alt="Feedback Form" 
          />
          <h3>FEEDBACK FORM</h3>
          <h6>We value your feedback/Suggestions</h6>
        </a>
      </div>
    </div>
  );
}

export default Quicklinks;
