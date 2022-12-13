import React from "react";
import NftJson from "./NftJson";

const NftCollection = ({ nft, pNftBack, pNft }) => {
 
  return (
    <>
      <div
        className="col-12 col-md-8 col-lg-8 col-xl-8  rightPresale rightpresalem"
        style={{ display: nft }}
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
                  Banner URL <span style={{ color: "red" }}>*</span>
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
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Json File <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  value="Ex. NFT collection.PNG"
                  placeholder="  5 BNB"
                />
                <input name="upload Logo" type="file" />
                <button className="px-2" type="">
                  Delete File
                </button>
              </div>
            </form>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <p></p>
            <p className="fw-bold">
              Double Check before finalizing. Once completed you will not be
              able to fix your launchpad profile. *
            </p>
          </div>
        </div>

        <div>
       <NftJson/>
        </div>

        <div className="d-flex">
          <button onClick={() => pNftBack()} className="nextBtn me-3">
            Back
          </button>
          <button onClick={() => pNft()} className="nextBtn">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default NftCollection;
