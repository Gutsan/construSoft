import { useState } from "react";

import "./App.css";
import MainContainer from "./Componets/MainContainer/MainContainer";
import { Header } from "./Componets/Header/Header";
import { Navbar } from "./Componets/Navbar/Navbar";

function App() {
  return (
    <div className="Layout 
    h-screen
    w-screen
    flex flex-wrap">
        
        <Navbar/>
        <div className="w-11/12 bg-slate-100 flex flex-col items-center">
          <Header nameWork="Irarrázaval"/>
          <MainContainer/>
        </div>
    </div>
  );
}

export default App;
