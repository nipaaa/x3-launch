import React, {useReducer,useState, createContext} from 'react';


export const Dat = createContext();
const PreSecondPage = ({pdn, pBtn  })=>{
        const  vali = document.getElementById('valinput');

const [datas , setDatas] = useState({
  text01:'',
  
});

const texting = (e)=>{
   const {name, value} = e.target;
    setDatas({
      ...datas,
      [name]: value
    })



}

console.log(datas)


    return(
        <>
        <Dat.Provider value={datas}>
         <div className="col-12 col-md-8 col-lg-8 col-xl-8  rightPresale" style={{display:pdn}}>
    
         <div className="row">
    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
    
     <form>
<div className="form-group">
<label for="exampleInputEmail1">Add Logo<span style={{color:"red"}}>*</span></label>
<input type="text"  className="form-control preinput" id="exampleInputEmail1"  placeholder="Add color or url jpg png jpeg"/>
<input type='file' />
</div>
</form>
     </div>

     <div className="col-12 col-md-6 col-lg-6 col-xl-6">

     <form>
<div className="form-group">
<label for="exampleInputEmail1">Add Background <span style={{color:"red"}}>*</span></label>
<input type="text" className="form-control preinput" id="exampleInputEmail1"  placeholder="add backgrund image or url jpg png jpeg"/>
<input type='file' />
</div>
</form>


     </div>
    </div>
         
      
<form>
<div className="form-group mt-2">
<label for="exampleInputEmail1">Add Pomo Video Url<span style={{color:"red"}}>*</span></label>
<input type="text"  className="form-control preinput" id="exampleInputEmail1"  placeholder="Add Promo video Url"/>

</div>
</form>
<form>
<div className="form-group mt-2">
<label for="exampleInputEmail1">Public Competition Title<span style={{color:"red"}}>*</span></label>
<input type="text"  className="form-control preinput" id="exampleInputEmail1"  placeholder="Public Competition Title"/>

</div>
</form>
    <form>
<div className="form-group mt-2">
<label for="exampleInputEmail1">Public Competition Description <span style={{color:"red"}}>*</span></label>
<textarea style={{height:"120px"}} type="text" className="form-control preinput" id="exampleInputEmail1"  placeholder="Ex :"></textarea>
</div>
</form>
    
<div className="row mt-4">
    <div className="col-12 col-md-4 col-lg-4 col-xl-4">
    
     <form>
<div className="form-group">
<label for="exampleInputEmail1">Start Time<span style={{color:"red"}}>*</span></label>
<input type="date"  className="form-control preinput" id="exampleInputEmail1"  />

</div>
</form>
     </div>

     <div className="col-12 col-md-4 col-lg-4 col-xl-4">

     <form>
<div className="form-group">
<label for="exampleInputEmail1">End Time <span style={{color:"red"}}>*</span></label>
<input type="date" className="form-control preinput" id="exampleInputEmail1"  />

</div>
</form>


     </div>


     
     <div className="col-12 col-md-4 col-lg-4 col-xl-4">

     <form>
<div className="form-group">
<label for="exampleInputEmail1">Winner Spots <span style={{color:"red"}}>*</span></label>
<input type="text" className="form-control preinput" id="exampleInputEmail1"  placeholder="Winner Spots"/>

</div>
</form>


     </div>
    </div>
 
 <button onClick={()=> pBtn()} className="nextBtn" >Next</button>


    </div>
    </Dat.Provider>
   
        </>
    )
}

export default PreSecondPage;
