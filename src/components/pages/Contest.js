import React, {useState, useContext} from'react';
import Nav from '../partial/Nav';
import WalNav from '../partial/WalNav';
import PresaleProgress from '../partial/Contest/ProgressBar';
import PreSecondPage from '../partial/Contest/PreSecodPage';
import PreThirdPage from '../partial/Contest/PreThirdPage';
import { Dat } from '../partial/Contest/PreSecodPage';

const Contest = ()=>{

    
    const colora = "#11b1F5";
    const colorb = "rgb(35, 196, 3)";
    const colort = '#fff';
    const colortb = "#111";
    const dnone = 'none';
    const dblock = "flex";

    const [bg , setBg] = useState(colora);
    const [tc , setTc] = useState(colort);
    const [pdn , setPdn] = useState(dblock);

    const colora1 = "rgb(243 231 231)";
    const colorb1 = "rgb(35, 196, 3)";

    const [bg1 , setBg1] = useState(colora1);
    const [tc1 , setTc1] = useState(colortb);

    const [pdn1 , setPdn1] = useState(dnone);
    const [pdn3 , setPdn3] = useState(dnone);
    const [pdn4 , setPdn4] = useState(dnone);

    const pBtn = ()=>{
            setBg(colorb);
            setBg1(colora);
            setPdn(dnone);
            setTc1(colort);
            setPdn1(dblock);
    }

    const colora2 = "rgb(243 231 231)";
    const colorb2 = "rgb(35, 196, 3)";

    const [bg2 , setBg2] = useState(colora2);
    const [tc2 , setTc2] = useState(colortb);
    const pBtn1 =()=>{
        setBg1(colorb);
        setBg2(colora);
        setPdn(dnone);
        setTc2(colort);
       
        setPdn3(dblock);

    }
    const [bg3 , setBg3] = useState(colora2);
    const [tc3 , setTc3] = useState(colortb);
    const pBtn3 =()=>{
        setBg2(colorb);
        setBg3(colora);
        setTc3(colort);
        setPdn3(dnone);
        setPdn4(dblock);
    }
    const pBtn4 =()=>{
        setBg2(colorb);
        setBg3(colora);
        setTc3(colort);
    }
 const rdata = useContext(Dat);

      console.log(rdata);

    return(
        <>
          <div className="d-flex">
       <Nav/>

<section className="home_contents">
    <WalNav/>
   <div className="container presaleWrap mx-auto row">
    <div className="col-12 col-md-4 col-lg-4 col-xl-4 row ">
      <PresaleProgress bgcolor1={bg1} bgcolor={bg} textColor1={tc1} textColor={tc} bgcolor2={bg2} textColor2={tc2}  bgcolor3={bg3} textColor3={tc3}/>
    </div>     
        <PreSecondPage pdn={pdn} pBtn={pBtn} />
        <PreThirdPage pdn1={pdn1} pBtn1={()=> pBtn1()}/>
       
</div>
    </section>
    </div>
        </>
    )
}


export default Contest;