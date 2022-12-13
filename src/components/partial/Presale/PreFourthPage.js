import React from "react";

const PreFourthPage = ({ pdn3, pBtn3Back, pBtn3 }) => {
  return (
    <>
      <div
        className="col-12 col-md-8 col-lg-8 col-xl-8  rightPresale"
        style={{ display: pdn3 }}
      >
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <p>{"(*)"} is required field.</p>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Logo URL <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  value="/favicon.ico"
                  placeholder="  5 BNB"
                  required
                />
                <input name="upload Logo" type="file" />
              </div>
            </form>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <p>.</p>

            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Banner URL
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="Ex :"
                />
                <input name="upload Logo" type="file" />
              </div>
            </form>
          </div>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">
            Category <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            className="form-control preinput"
            id="exampleInputEmail1"
            placeholder="Token Presale"
            required
          />
        </div>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Website<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder=""
                  required
                />
              </div>
            </form>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Promo Video 
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="https://youtu.be/ahobeirZzp.."
                />
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  coinHunt.cc
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="Ex :"
                />
              </div>
            </form>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  whitepaper <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="Ex :"
                  required
                />
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  directoapp
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="Ex :"
                />
              </div>
            </form>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Twitter 
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="Ex :"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Github
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="Ex :"
                />
              </div>
            </form>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Telegram 
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="Ex :"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Instagram
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="Ex :"
                />
              </div>
            </form>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Discord 
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="Ex :"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Reddit
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="Ex :"
                />
              </div>
            </form>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Medium 
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="Ex :"
                />
              </div>
            </form>
          </div>
        </div>

        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">
              Description <span style={{ color: "red" }}>*</span>
            </label>
            <textarea
              style={{ height: "150px" }}
              type="text"
              className="form-control preinput"
              id="exampleInputEmail1"
              placeholder="Ex :"
              required
            ></textarea>
          </div>
        </form>
        <div className="d-flex">
          <button onClick={() => pBtn3Back()} className="nextBtn me-3">
            Back
          </button>
          <button onClick={() => pBtn3()} className="nextBtn">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default PreFourthPage;
