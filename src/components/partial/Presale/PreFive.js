import React from "react";
const PreFive = ({ pdn4, pBtn4, pBtn4Back }) => {
  const aletim = () => {
    alert(
      "only completed UI here is don't have any backend or solidty smart contract Work"
    );
  };

  return (
    <>
      <div
        className="col-12 col-md-8 col-lg-8 col-xl-8  rightPresale"
        style={{ display: pdn4 }}
      >
        <div className="dataWrap">
          <span>Factory address</span>
          <span>0xD1B69676907Bb62762Ce2948c8F961D9a75b5BAD</span>
        </div>
        <div className="dataWrap">
          <span>Token Name</span>
          <span>Name</span>
        </div>
        <div className="dataWrap">
          <span>Decimals</span>
          <span>9</span>
        </div>
        <div className="dataWrap">
          <span>Symbol</span>
          <span>DRTP</span>
        </div>

        {/* <div className="dataWrap">
          <span>Private Sale Name</span>
          <span>Name</span>
        </div> */}

        <div className="dataWrap">
          <span>Sale method</span>
          <span>Public</span>
        </div>

        <div className="dataWrap">
          <span>Softcap</span>
          <span>10 BNB</span>
        </div>

        <div className="dataWrap">
          <span>Hardcap</span>
          <span>20 BNB</span>
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
          <span>90 days</span>
        </div>
        <div className="dataWrap">
          <span>Release Each Vesting Cycle</span>
          <span>20%</span>
        </div>
        <div className="dataWrap">
          <span>Liquidity Lock</span>
          <span>45%  460 Days</span>
        </div>
        <div className="dataWrap">
          <span> Lock Period</span>
          <span>45%  460 Days</span>
        </div>
        <div className="d-flex">
          <button onClick={() => pBtn4Back()} className="nextBtn me-3">
            Back
          </button>
          <button onClick={() => aletim()} className="nextBtn">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default PreFive;
