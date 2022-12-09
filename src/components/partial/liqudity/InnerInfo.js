import React from 'react';
import Nav from '../Nav';
import WalNav from '../WalNav';

const Innerinfo = ()=> {
    return(
        <>
            <div className="d-flex">
       <Nav/>

<section className="home_contents">
  
    <WalNav/>
   <div className="container mt-5 mx-auto ">

          <div className="lockTableInfo">
         
            <div className="lockTabelcell">
                <span>
                Current Locked Amount</span>

                <span>
                1370000
                </span>
            </div>
            <div className="lockTabelcell">
                <span>
                Current Value Locked</span>

                    <span>
                    $ 0
                    </span>
            </div>

            <div className="lockTabelcell">
                <span>
                Token Address</span>

                <span>
                0xD1B69676907Bb62762Ce2948c8F961D9a75b5BAD
                </span>
            </div>


            <div className="lockTabelcell">
                <span>
                Token Name</span>

                <span>
                Solaris
                </span>
            </div>

            <div className="lockTabelcell">
                <span>
                Token Symbol</span>

                <span>
                SLR
                </span>
            </div>

            <div className="lockTabelcell">
                <span>
                Token Decimals</span>

                <span>
                18
                </span>
            </div>







          </div>
      </div>
      </section>

      </div>
        </>
    )
}

export default Innerinfo;