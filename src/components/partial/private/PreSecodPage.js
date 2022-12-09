import React, { useReducer, useState, createContext } from "react";

const options = [
  {
    option: "BNB",
  },
  {
    option: "SOL",
  }
];
export const Dat = createContext();
const PreSecondPage = ({ pdn, pBtn }) => {
  const vali = document.getElementById("valinput");

  const [datas, setDatas] = useState({
    text01: "",
  });
  const [selected, setSelected] = useState("BNB");

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
      <div
        className="col-12 col-md-8 col-lg-8 col-xl-8  rightPresale"
        style={{ display: pdn }}
      >
        <p>{"(*)"} is required field.</p>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">
              Nmae <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control preinput"
              id="valinput"
              name="text01"
              onChange={texting}
              placeholder="Ex x3Launch"
            />
          </div>
          <div className="form-group mt-5">
            <label for="currency">Currency</label>

            <select
              className="form-select  preinput"
              aria-label="Default select example"
              onChange={(e) => selectHandler(e)}
            >
              {options.map((op, index) => (
                <option>{op.option}</option>
              ))}
            </select>
          </div>
        </form>
        <p className="mt-5">Users will pay with BNB for your token</p>
        <h6>Fee: 2% {selected} raised</h6>
        <button onClick={() => pBtn()} className="nextBtn">
          Next
        </button>
      </div>
    </>
  );
};

export default PreSecondPage;
