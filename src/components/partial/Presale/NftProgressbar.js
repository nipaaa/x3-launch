

import React from "react";

const NftProgressbar = ({
  bgcolor,
  bgcolor2,
  textColor2,
  textColor,
  bgcolor1,
  textColor1,
  bgcolor3,
  textColor3,
}) => {
  return (
    <>
      <div className="col-12 col-md-11 col-lg-11 col-xl-11 m-auto nftLeft">
        <div className="progressbar">
          <div
            className="p1"
            id="p1"
            style={{ background: bgcolor, color: textColor }}
          >
            1
          </div>
          <div
            className="p1"
            id="p2"
            style={{ background: bgcolor1, color: textColor1 }}
          >
            2
          </div>
          <div
            className="p1"
            id="p3"
            style={{ background: bgcolor2, color: textColor2 }}
          >
            3
          </div>
          <div
            className="p1"
            id="p4"
            style={{ background: bgcolor3, color: textColor3 }}
          >
            4
          </div>
          <div
            className="p1"
            id="p5"
            style={{ background: bgcolor3, color: textColor3 }}
          >
            5
          </div>
        </div>
        <div className="pbox">
          <div className="pc1">
            <h5>Verify Token</h5>
            <p>Enter the token address and verify</p>
          </div>

          <div className="pc1">
            <h5>DeFi launchpad</h5>
            <p>Enter the launchpad information</p>
          </div>

          <div className="pc1">
            <h5>Add Additional Info</h5>
            <p>Short description about your project and project links</p>
          </div>
          <div className="pc1">
            <h5>Add Nft Collection</h5>
            <p>Upload your json file with Nft Collection</p>
          </div>

          <div className="pc1">
            <h5>Finish</h5>
            <p>Review your information and submit your presale</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftProgressbar;
