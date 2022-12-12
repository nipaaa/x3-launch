import React, { useReducer, useState, createContext } from "react";

const options = [
  {
    option: "BNB",
  },
  {
    option: "SOL",
  },
];

export const Dat = createContext();
const PreSecondPage = ({ pdn, pBtn, setStepNo, setProjectNo }) => {
  const vali = document.getElementById("valinput");
  const [selected, setSelected] = useState("BNB");
  const [datas, setDatas] = useState({
    text01: "",
  });

  const texting = (e) => {
    const { name, value } = e.target;
    setDatas({
      ...datas,
      [name]: value,
    });
  };

  const selectHandler = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <Dat.Provider value={datas}>
        <div
          className="col-12 col-md-8 col-lg-8 col-xl-8  rightPresale"
          style={{ display: pdn }}
        >
          <p>{"(*)"} is required field.1</p>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">
                Token Address <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control preinput"
                id="valinput"
                name="text01"
                onChange={texting}
                placeholder="Ex 0X..."
              />
            </div>
            <div className="form-group mt-5">
              <label htmlFor="currency">Currency-Fee 0.75 BNB</label>
              <select
                className="form-select  preinput"
                aria-label="Default select example"
              >
                <option>BNB</option>
              </select>
            </div>
            {/* <div className="form-group mt-5">
              <label htmlFor="currency">Currency</label>
              <select
                className="form-select  preinput"
                aria-label="Default select example"
                onChange={(e) => selectHandler(e)}
              >
                {options.map((op, index) => (
                  <option key={index}>{op.option}</option>
                ))}
              </select>
            </div> */}
            {/* <div className="form-group mt-5">
              <label for="exampleInputEmail1">
                Projects Liquidity <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="number"
                className="form-control preinput"
                id="valinput"
                name="project"
                onChange={texting}
                placeholder="Minimum 0.75 BNB (BSC)"
                min="0.75"
              />
            </div> */}
          </form>

          <label className="mt-5">Fee Option</label>
          <h6 style={{ display: "flex", alignItems: "center" }}>
            <input style={{ marginLeft: "8px" }} type="radio" /> 4% {selected}{" "}
            raised only
          </h6>

          <h6 style={{ display: "flex", alignItems: "center" }}>
            <input style={{ marginLeft: "8px" }} type="radio" /> 1.5% {selected}{" "}
            raised + 1.5% token raised
          </h6>

          <button
            onClick={() => {
              pBtn();
            }}
            className="nextBtn"
          >
            Next
          </button>

          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            className="nextBtn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Next
          </button>

          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header border-0">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body border-0">
                  Once your project launch profile is created you will not be
                  able to revise your creation. We highly recommend using the
                  testnet before finalization
                </div>
                <div class="modal-footer border-0">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      pBtn();
                      
                    }}
                    className="btn btn-primary"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dat.Provider>
    </>
  );
};

export default PreSecondPage;
