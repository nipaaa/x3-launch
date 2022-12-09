import React, {useState, useContext} from'react';
import Nav from '../partial/Nav';
import WalNav from '../partial/WalNav';
import { Link } from 'react-router-dom';
import { Dat } from '../partial/Presale/PreSecodPage';
import Countdown from 'react-countdown';

const Detail = ()=>{

    
    

 const rdata = useContext(Dat);

      console.log(rdata);

    return(
        <>
          <div className="d-flex">
       <Nav/>

<section className="home_contents">
    <WalNav/>
   <div className="container presaleWrap mx-auto row">
   <div className="col-12 col-md-8 col-lg-8 col-xl-8  rightPresale">
      <div className="banner">
        <img src="images/bn.png" alt="bng"/>

        <div className="bnSub">
            <div className="subLogo">
                <img src="images/bnlogo.png"alt="logos" style={{width:"50px" ,height:"50px" , borderRadius:"50%"}}/>
                <div className="wrapLog">
                    <span className="ss">live</span>
                    <h5>X3Launch Private Sale</h5>
                    <div className="socialMedd">
                        <Link to="/"><i class="fa-solid fa-earth-americas"></i></Link>
                        <Link to="/"><i class="fa-brands fa-twitter"></i></Link>
                        <Link to="/"><i class="fa-brands fa-github"></i></Link>
                        <Link to="/"><i class="fa-brands fa-telegram"></i></Link>
                        <Link to="/"><i class="fa-brands fa-instagram"></i></Link>
                    </div>
                </div>
            </div>

            <p className="mt-4">
            The adoption of blockchain-based platforms is still lagging in most industries, despite the fact that an increasing number of business sectors have begun utilizing this technology. Decentralization, immutability, openness and traceability are some of the blockchain's qualities that are said to improve businesses as well as healthcare data management, according to prior studies. However, most sectors of business ecosystems have seen the official launch of only a few blockchain projects. Many ideas are still in the research and examination stages. To meet the need, we have created ‘‘RMH Utility Token’’ Utility Token. Our research and development of blockchain technologies help businesses become more efficient while upgrading current operating systems to run cheaper, faster and more secure.
            </p>
        </div>
      </div>
 



<div className="wrn01">

<div className="dataWrap">
            <span>Factory address</span>
            <span>0xD1B69676907Bb62762Ce2948c8F961D9a75b5BAD</span>
          </div>

          <div className="dataWrap">
            <span>Private Sale Name</span>
            <span>Name</span>
          </div>

          <div className="dataWrap">
            <span>Sale method</span>
            <span>Public</span>
          </div>
           
         
          <div className="dataWrap">
            <span>Softcap</span>
            <span>10 BSC</span>
          </div>

          <div className="dataWrap">
            <span>Hardcap</span>
            <span>20 BSC</span>
          </div>


          <div className="dataWrap">
            <span>Start time</span>
            <span>{"Sun, 01 Oct 2023 15:47:13 (UTC)"}</span>
          </div>


          <div className="dataWrap">
            <span>End time</span>
            <span>{"Thu, 10 Oct 2024 15:47:23 (UTC)"}</span>
          </div>

          <div className="dataWrap">
            <span>First Release</span>
            <span>40%</span>
          </div>
          <div className="dataWrap">
            <span>Vesting Period</span>
            <span>3 Minutes</span>
          </div>
          <div className="dataWrap">
            <span>Release Each Vesting Cycle</span>
            <span>20%</span>
          </div>


</div>







 
   </div>
    <div className="col-12 col-md-4 col-lg-4 col-xl-4 row " style={{padding:"0px 33px"}}>
    <div className="cwrapper">
    <div className="countDownWrapper">
        <h3 className="text-center">Presale Ends In</h3>
     <Countdown date={Date.now() + 900000002} />
     </div>

     <div className="progr">
        <p style={{marginBottom:"0px" , marginTop:'10px'}}>Progress</p>
        <progress id="file" value="32" max="100"> 32% </progress>
     </div>
     <div className="bnbwrap02">
    <span> 0.34 BNB</span>
    <span>100 BNB</span>
     </div>
    

    <div className="contributionAmmount mt-5">
    Contribute Amount
    <input type="text" placeholder="max BNB 10 "/>



    <button style={{borderRadius:"15px",  marginTop:"20px" , padding:'10px 5px', background:"#11b1F5", color:'#fff', border:'none'}} className="cb">Contribute With BNB</button>
    </div>
    </div>



    <div className="cwrapper mt-4">

     <div className="statusRow">
        <span>Status</span>
        <span className="ss">live</span>
     </div>
     <div className="statusRow">
        <span>Type</span>
        <span >public</span>
     </div>
     <div className="statusRow">
        <span>My Contribution</span>
        <span >0 BNB</span>
     </div>
     <div className="statusRow">
        <span>Total Contributors</span>
        <span >1</span>
     </div>
    </div>
    </div>     
     
</div>
    </section>
    </div>
        </>
    )
}


export default Detail;