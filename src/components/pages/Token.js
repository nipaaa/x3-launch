import React, {useState} from 'react';
import Nav from '../partial/Nav';
import WalNav from '../partial/WalNav';
import { Link } from 'react-router-dom';


const Token  = ({projectNo})=> {
   
    const dn = "none";
    const dop = "block";
    const[op, setOp] = useState(dop);

    return(
        <>
        <div className="d-flex">
       <Nav/>

<section className="home_contents">
  
    <WalNav/>
   <div className="container mt-5 mx-auto ">
      
      <div className="searchBox">
      <form>
<div className="form-group mt-2">
<input type="text"  className="form-control preinput"   placeholder="Search By Token Address"/>


</div>
</form>
<div className="btnWraper">
<button onClick={()=> setOp(dop)}>All</button>
<button  onClick={()=> setOp(dn)}>My Locks</button>

</div>
      </div>

<div className="tableLocker" style={{display:op, marginTop:"40px"}}>
<div style={{display:'flex', justifyContent:"space-between", paddingTop:"10px"}}><span style={{fontWeight:"bold"}}>Token</span> <span style={{fontWeight:"bold"}}>Locked Amount</span> <span>.</span></div>
    <div className="tableChild">
        <div className="tableLeft">
            <img src="images/tinytesla.png" alt="tinytesla"/> X3Launch
        </div>
         
         <div className="tableMiddle">
            <h5>1370000.000</h5>
         </div>

         <div className="tableRight">
            <Link to="/innerinfo"> View</Link>
         </div>

    </div>

    <div className="tableChild">
        <div className="tableLeft">
            <img src="images/tinytesla.png" alt="tinytesla"/> X3Launch
        </div>
         
         <div className="tableMiddle">
            <h5>1370000.000</h5>
         </div>

         <div className="tableRight">
            <Link to="/innerinfo"> View</Link>
         </div>

    </div>


    <div className="tableChild">
        <div className="tableLeft">
            <img src="images/tinytesla.png" alt="tinytesla"/> X3Launch
        </div>
         
         <div className="tableMiddle">
            <h5>{projectNo === "project1" ? "1000" : "1370000.000"}</h5>
         </div>

         <div className="tableRight">
            <Link to="/innerinfo"> View</Link>
         </div>

    </div>

{projectNo === "project1" &&
<>
    <div className="tableChild">
        <div className="tableLeft">
            <img src="images/tinytesla.png" alt="tinytesla"/> projectNo1
        </div>
         
         <div className="tableMiddle">
            <h5>1370000.000</h5>
         </div>

         <div className="tableRight">
            <Link to="/innerinfo"> View</Link>
         </div>

    </div>
    <div className="tableChild">
        <div className="tableLeft">
            <img src="images/tinytesla.png" alt="tinytesla"/> projectNo2
        </div>
         
         <div className="tableMiddle">
            <h5>1370000.000</h5>
         </div>

         <div className="tableRight">
            <Link to="/innerinfo"> View</Link>
         </div>

    </div>
    
    </>
    }
</div>










   </div>
   </section>
   </div>
        </>
    )
}

export default Token;