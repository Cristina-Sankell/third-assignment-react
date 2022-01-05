import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {

  const [showNav, setShowNav] = useState(false)

  return (
    <div className="app">
      <button onClick={() => setShowNav(true)} className={showNav ? "btn-hide" : "menu-btn btn"}>Menu</button>
      <Navbar onClose={() => setShowNav(false)} showNav={showNav}/>
      <Home/>
    </div>
  );
}

export default App;
