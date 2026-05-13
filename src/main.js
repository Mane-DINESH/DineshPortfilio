// import React from 'react'; // <-- Required for JSX
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );



import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // Make sure App is also in JS format

createRoot(document.getElementById('root')).render(
  React.createElement(StrictMode, null, React.createElement(App))
);
