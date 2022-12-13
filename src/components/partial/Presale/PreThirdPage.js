import React from "react";

const PreThirdPage = ({ pdn1, pBtnBack, pBtn1 }) => {
  const options = [
    {
      option: "1 inch DEX",
    },
    {
      option: "Pancakeswap DEX",
    },
  ];

  function ppp () {
    for (let i = 45; i <= 100; i++) {
      const element = i;

      return element;
    }
  };
  
  
  return (
    <>
      <div
        className="col-12 col-md-8 col-lg-8 col-xl-8  rightPresale rightpresalem"
        style={{ display: pdn1 }}
      >
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <p>{"(*)"} is required field.</p>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Quantity of Presale Tokens{" "}
                  <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="number"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="2500000"
                />
              </div>
            </form>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Decimals <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="number"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="9 "
                />
              </div>
            </form>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Softcap BNB <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="  5 BNB"
                />
              </div>
            </form>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <p>.</p>

            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Token Name<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="X3LA Token"
                />
              </div>
            </form>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Symbol <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="X3LA"
                />
              </div>
            </form>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Hardcap BNB <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder=" 0.3 BNB"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <p>{"(*)"} is required field.</p>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Min Buy<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="number"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="  0.2 BNB"
                />
              </div>
            </form>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <p>.</p>

            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Max Buy <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="number"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder=" 4 BNB"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <p>{"(*)"} is required field.</p>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Start Time <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="date"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="  0.3 BNB"
                />
              </div>
            </form>
            <form>
              <div className="form-group  mt-4">
                <label for="exampleInputEmail1">
                  Vesting period each cycle
                  <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="number"
                  className="form-control preinput"
                  placeholder=" 90"
                />
              </div>
            </form>
            <form>
              <div className="form-group mt-2">
                <label for="exampleInputEmail1">
                  Vesting Period in days <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="number"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="90"
                />
              </div>
            </form>
            <form>
              <div className="form-group">
                <label htmlFor="currency">Liquidity Lock Percentage</label>
                <select
                  className="form-select  preinput"
                  aria-label="Default select example"
                >
                
                  {/* <option> {this.ppp()}</option> */}
                  {/* <option>55%</option>
                <option>65%</option>
                <option>75%</option>
                <option>85%</option>
                <option>95%</option>
                <option>100%</option> */}
                </select>
              </div>
            </form>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <p>.</p>

            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  END Time <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="date"
                  className="form-control preinput"
                  placeholder="  3 BNB"
                />
              </div>
            </form>
            <form>
              <div className="form-group mt-4">
                <label for="exampleInputEmail1">
                  Percentage released each cycle{" "}
                  <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="number"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="45"
                />
              </div>
            </form>
            <form>
              <div className="form-group mt-2">
                <label for="currency">
                  {" "}
                  Select Dex <span style={{ color: "red" }}>*</span> (Liquidity
                  automatically added)
                </label>
                <select
                  className="form-select  preinput"
                  aria-label="Default select example"
                >
                  {" "}
                  {options.map((op, index) => (
                    <option>
                      {" "}
                      <input type="radio" />{" "}
                      <i class="fa-regular fa-circle"></i> {op.option}
                    </option>
                  ))}
                </select>
              </div>
            </form>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Lock up Period in days <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="number"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="460"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="form-group mt-2">
          <input type="radio" /> Use WhiteList
          <p>You can enable/disable whitelist anytime.</p>
        </div>

        <div className="d-flex">
          <button onClick={() => pBtnBack()} className="nextBtn me-3">
            Back
          </button>
          <button onClick={() => pBtn1()} className="nextBtn">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default PreThirdPage;
