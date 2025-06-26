import Navbar from "./components/Navbar.jsx"
import LandingPage from "./Pages/LandingPage.jsx"
import NavPage from "./Pages/NavPage.jsx"
import SecNav from "./components/SecNav.jsx"
import LovablePage from "./Pages/LovablePage.jsx"
import IntegrationPage from "./Pages/IntegrationPage.jsx"
import SecurityPage from "./Pages/SecurityPage.jsx"
import IntDataPage from "./Pages/IntDataPage.jsx"
function App() {
 

  return (
    <>
    <div className=" overflow-hidden">
      <div className="bg-[#100A06]  ">
        
        <Navbar/> 
        <LandingPage/> 
        <NavPage/>
        <SecNav/>
        <IntDataPage/>
         <IntDataPage/> {/*same for self serve page */}
        <LovablePage/>
        
        <IntegrationPage/>
        <SecurityPage/>
        <IntegrationPage/>
        
        
      </div>
    </div>
      
    </>
  )
}

export default App
