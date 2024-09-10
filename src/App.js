// import React from "react"
// import { Routes, Route } from "react-router-dom"
// import Quicklinks from "./components/quicklinks"
// import IPD from "./components/IPD"
// import Nav from "./components/Nav"
// import Resources from "./components/resources"
// import Lnd from "./components/LnD"
// import MLV2 from "./components/mlearningv2"
// import MLV1 from "./components/mlearningv1"
// import EPLM from "./components/eplm"
// import JDLC from "./components/JDLC"
// import AAR from "./components/AAR"
// function App() {
//     return <>
//                 <Nav />
//                 <Routes>
//                   <Route path="/" element={<IPD />} />
//                   <Route path="/quicklinks" element={<Quicklinks />} />
//                   <Route path="/resources" element={<Resources />} />
//                   <Route path="/Lnd" element={<Lnd />} />
//                   <Route path="/download-eplm" element={<EPLM />} />
//                   <Route path="/microlearning-series-v2" element={<MLV2 />} />
//                   <Route path="/microlearning-series-v1" element={<MLV1 />} />
//                   <Route path="/justice-datalab-corner" element={<JDLC />} />
//                   <Route path="/aar-submission-drive" element={<AAR />} />
//                   {/* <Route path="*" element={<IPD />} /> */}



//                 </Routes>
//           </>
//   }

// export default App


import React from 'react'
import create from 'zustand'
import Nav from './components/Nav'
import Quicklinks from './components/Quicklinks'
import IPD from './components/IPD'
import Resources from './components/Resources'
import Lnd from './components/LnD'
import MLV2 from './components/mlearningv2'
import MLV1 from './components/mlearningv1'
import EPLM from './components/eplm'
import JDLC from './components/JDLC'
import AAR from './components/AAR'
import ManualsIRR from './components/ManualsIRR'
import TemplatesReferences from './components/TempsNRefs'
import PolicyDatabase from './components/PolicyDatabase'
import ParalegalProcessFlowchart from './components/PPF'
import BJMPROXOrdinances from './components/ordinances'
import DirectoryParalegalOfficers from './components/DPO'
import DirectoryCourtsRX from './components/DCRX'
import OrganizationalChart from './components/orgchart'

// Create Zustand store with persistence
const useStore = create((set) => ({
  currentPage: localStorage.getItem('currentPage') || 'IPD',
  setCurrentPage: (page) => {
    set({ currentPage: page });
    localStorage.setItem('currentPage', page); // Save to localStorage
  },
}));

function App() {
  const { currentPage, setCurrentPage } = useStore(); // Get state and updater from Zustand

  const renderPage = () => {
    switch (currentPage) {
      case 'Quicklinks':
        return <Quicklinks setCurrentPage={setCurrentPage} />;
      case 'Resources':
        return <Resources setCurrentPage={setCurrentPage} />;
      case 'Lnd':
        return <Lnd setCurrentPage={setCurrentPage} />;
      case 'EPLM':
        return <EPLM setCurrentPage={setCurrentPage} />;
      case 'MLV2':
        return <MLV2 setCurrentPage={setCurrentPage} />;
      case 'MLV1':
        return <MLV1 setCurrentPage={setCurrentPage} />;
      case 'JDLC':
        return <JDLC setCurrentPage={setCurrentPage} />;
      case 'AAR':
        return <AAR setCurrentPage={setCurrentPage} />;
      case 'ManualsIRR':
        // Assuming there’s a component for Manuals/IRR
        return <ManualsIRR setCurrentPage={setCurrentPage} />;
      case 'TemplatesReferences':
        // Assuming there’s a component for Templates and References
        return <TemplatesReferences setCurrentPage={setCurrentPage} />;
      case 'PolicyDatabase':
        // Assuming there’s a component for Policy Database
        return <PolicyDatabase setCurrentPage={setCurrentPage} />;
      case 'ParalegalProcessFlowchart':
        // Assuming there’s a component for Paralegal Process Flowchart
        return <ParalegalProcessFlowchart setCurrentPage={setCurrentPage} />;
      case 'BJMPROXOrdinances':
        // Assuming there’s a component for BJMPRO-X Ordinances
        return <BJMPROXOrdinances setCurrentPage={setCurrentPage} />;
      case 'DirectoryParalegalOfficers':
        // Assuming there’s a component for Directory of Paralegal Officers
        return <DirectoryParalegalOfficers setCurrentPage={setCurrentPage} />;
      case 'DirectoryCourtsRX':
        // Assuming there’s a component for Directory of Courts - RX
        return <DirectoryCourtsRX setCurrentPage={setCurrentPage} />;
      case 'OrganizationalChart':
        // Assuming there’s a component for Organizational Chart
        return <OrganizationalChart setCurrentPage={setCurrentPage} />;
      default:
        return <IPD setCurrentPage={setCurrentPage} />;
    }
  };
  return (
    <div>
      <Nav setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App
