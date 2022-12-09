import React, { useEffect, useState } from "react";

const Nft = ({ pNft, nft, pNftBack }) => {
  const [nftPic, setNftPic] = useState([]);
  useEffect(() => {
    fetch("nft.json")
      .then((res) => res.json())
      .then((data) => setNftPic(data));
  }, []);

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>
      <div
        className="col-12 col-md-8 col-lg-8 col-xl-8  rightPresale"
        style={{ display: nft }}
      >
        <div>
          <div className=" shadow m-5">
            <p>Upload your photo here</p>

            <div className="ms-5 me-5">
              <div className="d-flex justify-content-between">
                <div>
                  <img
                    className="my-5"
                    style={{ height: "223px", width: "270px" }}
                    src={file}
                    alt="nft"
                  />
                </div>

                <div className=" my-auto">
                  <input
                    className="mt-0 ms-5"
                    type="file"
                    id="img"
                    name="img"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-3">
          {nftPic.map((picture) => (
            <div className="col-12 col-md-6 col-lg-4" key={picture.id}>
              <img className="img-fluid w-100 h-100" src={picture.pic} alt="" />
            </div>
          ))}

          <div className="d-flex">
            <button onClick={() => pNftBack()} className="nextBtn me-3">
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
