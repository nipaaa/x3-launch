import React from 'react';

const Nft = ({pNft,nft,pNftBack}) => {
 
    return (
        <>
        <div
          className="col-12 col-md-8 col-lg-8 col-xl-8  rightPresale"
          style={{ display: nft }}
        >
          <div className="row">
           
  
          
  
  
  
           <div className="d-flex">
            <button onClick={() =>pNftBack ()} className="nextBtn me-3">
              Back
            </button>
            <button onClick={() => pNft()} className="nextBtn">
              Next
            </button>
          </div> 
        </div>
        </div>
      </>
    );
};

export default Nft;