import React from 'react';


const PresaleProgress  = ({bgcolor , textColor, bgcolor1, textColor1 })=>{
    return(
        <>
        
        <div className="col-12 col-md-11 col-lg-11 col-xl-11 m-auto leftPresale" style={{height:"320px"}}>
           <div className="progressbar" >
               <div className="p1" id="p1"style={{background:bgcolor, color:textColor}}>1</div>
               <div className="p1" id="p2" style={{background:bgcolor1, color:textColor1, top:'50%'}}>2</div>
           </div>
           <div className="pbox">
           <div className="pc1">
             <h5>Set Up</h5>
             <p>Kickstart Your Contest</p>
           </div>


           <div className="pc1" style={{marginTop:"42px"}}>
             <h5>
          How to Enter</h5>
             <p>Add Ways to Enter</p>
           </div>


         
         
           </div>
        </div>
        </>
    )
}

export default PresaleProgress;