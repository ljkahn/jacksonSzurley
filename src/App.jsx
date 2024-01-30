import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Pictures from "./Pages/pictureDisplay";
import Contact from "./Pages/Contact";
import Store from "./Pages/Store";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Pictures />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
