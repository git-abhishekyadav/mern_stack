import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// import React from "react";
// import ReactDOM from 'react-dom/client'
// import createRoot from "react-dom/client";

// const App = () => (
//   <div>Hello World</div>,
//     <div>Hello Abhi</div>

// )

// const root = ReactDOM.createRoot(document.getElementById('root')).render(<App />);
// root.render(App);  cant render function it needs to render component as above line

// createRoot(document.getElementById('root')).render(<App />);



 