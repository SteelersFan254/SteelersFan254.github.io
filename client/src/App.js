import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/navbar.js";

// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
