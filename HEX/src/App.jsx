import Navbar from "./components/Navbar.jsx"
import LandingPage from "./Pages/LandingPage.jsx"
import NavPage from "./Pages/NavPage.jsx"
import SecNav from "./components/SecNav.jsx"
import LovablePage from "./Pages/LovablePage.jsx"
import IntegrationPage from "./Pages/IntegrationPage.jsx"
import SecurityPage from "./Pages/SecurityPage.jsx"
import IntDataPage from "./Pages/IntDataPage.jsx"
import AnimPage from "./Pages/AnimPage.jsx"
import React, { useEffect, useState } from "react";
import SelfServe from "./Pages/SelfServe.jsx"
import BuildAnythingPage from "./Pages/BuildAnythingPage.jsx"
import DeepdivePage from "./Pages/DeepdivePage.jsx"
import DemoNav from "./Pages/DemoNav.jsx"


function App() {

  const [key, setKey] = useState(Date.now()); 

  useEffect(() => {
   
    setKey(Date.now());
  }, []);





  return (
    <>
      <div className=" overflow-hidden">
        <div className="bg-[#100A06]  ">

          <Navbar />
          <LandingPage />
          <NavPage />
          <SecNav />

          <DeepdivePage/>
          <IntDataPage /> 
          <IntDataPage /> 
          {/* <IntDataPage />  */}
           {/* <SelfServe/> */}
          <LovablePage />

          <IntegrationPage />
          <SecurityPage />
          <BuildAnythingPage/>
          
          <DemoNav/>




     
        </div>
      </div>

    </>
  )
}

export default App
