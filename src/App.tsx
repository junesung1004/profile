import React from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CoverLetter from "./pages/CoverLetter";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coverletter" element={<CoverLetter />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
