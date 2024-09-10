import React from 'react';
import '../styles/home_page.scss';

function Resources({ setCurrentPage }) {
  return (
    <div>
      <h2>RESOURCES</h2>
      <div className="container">
        <div 
          className="item" 
          onClick={() => setCurrentPage('ManualsIRR')} // Update state to show Manuals/IRR
        >
          <img 
            src="https://i.postimg.cc/4NhyH4JB/icon-1.png" 
            alt="Manuals/IRR" 
          />
          <h3>MANUALS/IRR</h3>
          <h6>Paralegal and Time Allowances of PDL Manuals</h6>
        </div>
        <div 
          className="item" 
          onClick={() => setCurrentPage('TemplatesReferences')} // Update state to show Templates and References
        >
          <img 
            src="https://i.postimg.cc/0yYNZtKS/icon-2.png" 
            alt="Templates and References" 
          />
          <h3>TEMPLATES AND REFERENCES</h3>
          <h6>Letters to Justice Actors | Legal Forms</h6>
        </div>
        <div 
          className="item" 
          onClick={() => setCurrentPage('PolicyDatabase')} // Update state to show Policy Database
        >
          <img 
            src="https://i.postimg.cc/43Xx0zpS/icon-3.png" 
            alt="Policy Database" 
          />
          <h3>POLICY DATABASE</h3>
          <h6>Policies | Advisories | Handbooks | Circulars</h6>
        </div>
        <div 
          className="item" 
          onClick={() => setCurrentPage('ParalegalProcessFlowchart')} // Update state to show Paralegal Process Flowchart
        >
          <img 
            src="https://i.postimg.cc/nhbz48rZ/icon-4.png" 
            alt="Paralegal Process Flowchart" 
          />
          <h3>PARALEGAL PROCESS FLOWCHART</h3>
          <h6>Policies | Advisories | Handbooks | Circulars</h6>
        </div>
        <div 
          className="item" 
          onClick={() => setCurrentPage('BJMPROXOrdinances')} // Update state to show BJMPRO-X Ordinances
        >
          <img 
            src="https://i.postimg.cc/zfpGYVjX/icon-5.png" 
            alt="BJMPRO-X Ordinances" 
          />
          <h3>BJMPRO-X ORDINANCES</h3>
          <h6>Approved Ordinances per Jail | Samples</h6>
        </div>
        <div 
          className="item" 
          onClick={() => setCurrentPage('DirectoryParalegalOfficers')} // Update state to show Directory of Paralegal Officers
        >
          <img 
            src="https://i.postimg.cc/TwwYdf7j/icon-6.png" 
            alt="Directory of Paralegal Officers" 
          />
          <h3>DIRECTORY OF PARALEGAL OFFICERS</h3>
          <h6>As of CY 2023 | Click here to update</h6>
        </div>
        <div 
          className="item" 
          onClick={() => setCurrentPage('DirectoryCourtsRX')} // Update state to show Directory of Courts - RX
        >
          <img 
            src="https://i.postimg.cc/xC4jqhhw/icon-7.png" 
            alt="Directory of Courts - RX" 
          />
          <h3>DIRECTORY OF COURTS - RX</h3>
          <h6>Court Email Addresses | Contact Numbers</h6>
        </div>
        <div 
          className="item" 
          onClick={() => setCurrentPage('OrganizationalChart')} // Update state to show Organizational Chart
        >
          <img 
            src="https://i.postimg.cc/6q4WZzNy/icon-8.png" 
            alt="Organizational Chart" 
          />
          <h3>ORGANIZATIONAL CHART</h3>
          <h6>Court Email Addresses | Contact Numbers</h6>
        </div>
      </div>
    </div>
  );
}

export default Resources;
