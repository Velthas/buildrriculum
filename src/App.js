import React, { useRef } from 'react';
import ReactDOM from "react-dom/client";

import WrappedCv from './components/sections/Cv';
import Header from './components/sections/Header';
import Palette from'./components/sections/Palette';
import Footer from'./components/sections/Footer';

import { useReactToPrint } from 'react-to-print';

import './styles/cv.css';
import './styles/form.css';
import './styles/shared.css';
import './styles/palette.css';

const App = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <Header name="BUILDRRICULUM" classes="flex-row centered-both" />
      <Palette classes="flex-column centered-both" />
      <div id="backdrop"> 
        <WrappedCv ref={componentRef}/>
      </div>
      <div className="flex-row centered-both">
        <button onClick={handlePrint} className="print-to-pdf">SAVE AS PDF</button> 
      </div>
      <Footer classes="footer flex-row centered-both"/>
    </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
