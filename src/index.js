// import ReactDOM from "react-dom"
// import React from "react"
// import { BrowserRouter } from "react-router-dom"
// import  App  from "./App"



// const app = document.getElementById("app")
// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, app)

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';

// const rootElement = document.getElementById('app');

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   rootElement
// );

// function AppWrapper() {
//     return (
//       <Router>
//         <App />
//       </Router>
//     );
//   }
  
  // export default AppWrapper;
  



  import React from 'react';
  import ReactDOM from 'react-dom';
  import { BrowserRouter } from 'react-router-dom'; 
  import App from './App';
  
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app')
  );
