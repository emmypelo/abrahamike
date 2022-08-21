import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/main.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
  
      <Router>
        <Header />
        <Home/>
        <Footer />
      </Router>
    
  );
}

export default App;
