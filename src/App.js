import { useState } from 'react';
import {Routes, Route  } from 'react-router-dom';
import Home from './components/Home';
// import Learn from './components/pages/Learn';
import Presale from './components/pages/Presale';
import Privatesale from './components/pages/PrivateSale';
import Contest from './components/pages/Contest';
import Locker from './components/pages/Locker';
import Token from './components/pages/Token';
import Innerinfo from './components/partial/Token/InnerInfo';
import Liqudity from './components/pages/Liqudity';
import TokenBuilder from './components/pages/TokenBuilder';
import Antibot from './components/pages/Antibot';
import Kyc from './components/pages/Kyc';
import Detail from './components/pages/Details';
import Projects from './components/pages/Projects';
import Stepper from './components/pages/Stepper';


function App() {

  const [projectNo, setProjectNo] = useState("project1")
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path="/Learn" element={<Learn/>}/> */}
        <Route path="/presale" element={<Presale setProjectNo={setProjectNo}/>}/>
        <Route path="/privatesale" element={<Privatesale/>}/>
        <Route path="/contest" element={<Contest/>}/>
        <Route path="/locker" element={<Locker/>}/>
        <Route path="/Token" element={<Token projectNo={projectNo}/>}/>
        <Route path="/innerinfo" element={<Innerinfo/>}/>
        <Route path="/liqudity" element={<Liqudity/>}/>
        <Route path="/tokenbuilder" element={<TokenBuilder/>}/>
        <Route path="/antibot" element={<Antibot/>}/>
        <Route path="/kyc" element={<Kyc/>}/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/stepper" element={<Stepper/>}/>
       
      </Routes>


      
    </>
  );
}

export default App;
