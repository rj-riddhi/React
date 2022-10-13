import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
