import React from 'react';
import Nav from '../partial/Nav';
import WalNav from '../partial/WalNav';

const TokenBuilder = ()=> {

    const crateToken =()=>{
        alert ("only completed UI here is don't have any backend or solidty smart contract Work")
    }
    return(
        <>
 <div className="d-flex">
       <Nav/>

<section className="home_contents">

    <WalNav/>
   <div className="container presaleWrap mx-auto row">
   <div className="col-12 col-md-11  rightPresale" >
    
   <div className="row">
    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
    
     <form>
<div className="form-group">
<label for="exampleInputEmail1">Name <span style={{color:"red"}}>*</span></label>
<input type="text" className="form-control preinput" id="exampleInputEmail1"  placeholder="Ex :"/>
</div>
</form>
     </div>

     <div className="col-12 col-md-6 col-lg-6 col-xl-6">

     <form>
<div className="form-group">
<label for="exampleInputEmail1">Symbol <span style={{color:"red"}}>*</span></label>
<input type="text" className="form-control preinput" id="exampleInputEmail1"  placeholder="Ex : "/>
</div>
</form>


     </div>
    </div>


   
    <div className="row mt-5">
    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
    
     <form>
<div className="form-group">
<label for="exampleInputEmail1">Decimals <span style={{color:"red"}}>*</span></label>
<input type="text" className="form-control preinput" id="exampleInputEmail1"  placeholder="Ex :"/>
</div>
</form>
     </div>

     <div className="col-12 col-md-6 col-lg-6 col-xl-6">

     <form>
<div className="form-group">
<label for="exampleInputEmail1">Total Supply <span style={{color:"red"}}>*</span></label>
<input type="text" className="form-control preinput" id="exampleInputEmail1"  placeholder="Ex : "/>
</div>
</form>


     </div>
    </div>


<button className="nextBtn" onClick={()=> crateToken()} style={{width:'128px'}}>Create Token</button>


</div>

    </div>

    </section>

    </div>
        
        </>
    )
}

export default TokenBuilder;