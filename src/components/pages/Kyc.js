import React from 'react';
import Nav from '../partial/Nav';
import WalNav from '../partial/WalNav';
import { Link } from 'react-router-dom';
const Kyc = ()=>{


    return(
        <>
         <div className="d-flex">
       <Nav/>

<section className="home_contents">

    <WalNav/>
    <div className="container mt-5 mx-auto ">
      
 




    <div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
       
        <th scope="col">Name</th>
        <th scope="col">Discount</th>
        <th scope="col">Confidence</th>
        <th scope="col">Region</th>
        <th scope="col">Contact</th>
      </tr>
    </thead>
    <tbody>
      <tr>

        
        <td>X3Launch</td>
        <td>10%</td>
        <td className="he" >Heighi</td>
        <td><Link to="/"><img style={{width:'30px', height:"30px", borderRadius:"15px"}} src="images/f1.png" alt="flag"/></Link></td>
        <td><Link to="/"><img style={{width:'30px', height:"30px", borderRadius:"15px"}} src="images/t.png" alt="flag"/></Link></td>
       
      </tr>
      <tr>

        
<td>X3Launch</td>
<td>10%</td>
<td className="he" >Heighi</td>
<td><Link to="/"><img style={{width:'30px', height:"30px", borderRadius:"15px"}} src="images/f1.png" alt="flag"/></Link></td>
<td><Link to="/"><img style={{width:'30px', height:"30px", borderRadius:"15px"}} src="images/t.png" alt="flag"/></Link></td>

</tr>
<tr>

        
<td>X3Launch</td>
<td>10%</td>
<td className="he" >Heighi</td>
<td><Link to="/"><img style={{width:'30px', height:"30px", borderRadius:"15px"}} src="images/f1.png" alt="flag"/></Link></td>
<td><Link to="/"><img style={{width:'30px', height:"30px", borderRadius:"15px"}} src="images/t.png" alt="flag"/></Link></td>

</tr>
    </tbody>
  </table>
</div>







   </div>
   </section>
   </div>
        
        </>
    )
}


export default Kyc;