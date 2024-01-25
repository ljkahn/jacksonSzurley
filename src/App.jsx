import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Pictures from "./Pages/pictureDisplay";
import Contact from "./Pages/Contact";
import Store from "./Pages/Store";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Pictures />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
