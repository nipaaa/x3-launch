import React from "react";

const PreThirdPage = ({ pdn1, pBtnBack, pBtn1 }) => {
  return (
    <>
      <div
        className="col-12 col-md-8 col-lg-8 col-xl-8  rightPresale"
        style={{ display: pdn1 }}
      >
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <p>{"(*)"} is required field.</p>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Softcap BSC <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="  5 BSC"
                />
              </div>
            </form>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <p>.</p>

            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Hardcap BSC <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder=" 0.3 BSC"
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
                  Buy BSC <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="  0.3 BSC"
                />
              </div>
            </form>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <p>.</p>

            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Buy BSC <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="  3 BSC"
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
                  placeholder="  0.3 BSC"
                />
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
                  placeholder="  3 BSC"
                />
              </div>
            </form>
          </div>
        </div>

        <form>
          <div className="form-group  mt-4">
            <label for="exampleInputEmail1">
              Vesting period each cycle<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control preinput"
              placeholder="  0.3 BSC"
            />
          </div>
        </form>

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
