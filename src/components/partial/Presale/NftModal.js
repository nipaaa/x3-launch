import React, { useEffect, useState } from "react";

const NftModal = () => {
  const [nftPic, setNftPic] = useState([]);

  useEffect(() => {
    fetch("nft.json")
      .then((res) => res.json())
      .then((data) => setNftPic(data));
  }, []);
  return (
    <div className="row g-3 mt-5">
      {nftPic.map((nft) => (
        <div className="col-12 col-md-6 col-lg-3" key={nft.id}>
          {/* <!-- Button trigger modal --> */}
          <div data-bs-toggle="modal" data-bs-target="#exampleModal1">
            <div className="shadow p-2">
              <img
                style={{ height: "200px", objectFit: "cover" }}
                className=" w-100 img-fluid"
                src={nft.pic}
                alt=""
              />
              <div
                style={{ color: "#11b1f5" }}
                className="d-flex justify-content-between fw-bold pt-2 px-3"
              >
                <p>{nft.id}.</p>
                <p className=""> {nft.price} BNB</p>
              </div>
            </div>
          </div>

          {/* <!-- Modal --> */}
          <div
            style={{ height: "100vh", overflowY: "scroll" }}
            class="modal fade"
            id="exampleModal1"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header border-0">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body p-0">
                  <img
                    style={{ height: "400px" }}
                    className=" w-100 img-fluid"
                    src={nft.pic}
                    alt=""
                  />
                  <div
                    style={{ color: "#11b1f5" }}
                    className="d-flex justify-content-between fw-bold mt-3 px-5"
                  >
                    <h2>{nft.id}.</h2>
                    <h2 className="">{nft.price} BNB</h2>
                  </div>
                  <div className="p-4">
               <div className="mb-5">
                    <h4>
                      <span className="fw-bold"> Description</span> The
                      Rooster are wild and we are the human who love them.
                      Roosternoids are the future if digital era.{" "}
                    </h4>
                  </div>
                  <div className="mb-3 pt-3">
                    <h4 className="fw-bold p-0 m-0">Characteristics</h4>
                    <button style={{backgroundColor:"#f5f1f1"}} className="btn px-3 py-1  rounded-pill my-3 me-3">10% Body: Blue Eyes</button>
                    <button style={{backgroundColor:"#f5f1f1"}} className="btn px-3 py-1  rounded-pill m-3">20% Body: Yellow Skin</button>
                    <button style={{backgroundColor:"#f5f1f1"}} className="btn px-3 py-1  rounded-pill m-3">70% Background: Grey</button>
                    <button style={{backgroundColor:"#f5f1f1"}} className="btn px-3 py-1  rounded-pill my-3 me-3">100% Hair: Green</button>
                    <button style={{backgroundColor:"#f5f1f1"}} className="btn px-3 py-1  rounded-pill m-3">10% Wings: Brown</button>
                   
                  </div>
                  <div className="mb-5">
                    <h4 className="fw-bold">End date:</h4>
                    <button style={{backgroundColor:"#f5f1f1"}} className="btn px-3 py-1  rounded-pill my-3">February 17th, 2023</button>
                  </div>
                  <div className="mb-5">
                    <h4 className="fw-bold">Contract Address</h4>
                    <h4 className="text-primary p-0 m-0">0Bxd...2Ca4</h4>
                  </div>
                  <div className="mb-5">
                    <h4 className="fw-bold">Token ID:</h4>
                    <h4 className="text-primary p-0 m-0">9</h4>
                  </div>
                  <div className="mb-5">
                    <h4 className="fw-bold">Token Standard:</h4>
                    <h4 className="p-0 m-0">Bep-20</h4>
                  </div>
                  <div className="mb-5">
                    <h4 className="fw-bold p-0 m-0">Blockchain:</h4>
                    <h4 className="p-0 m-0">Binance</h4>
                  </div>
               </div>
                  <div className="text-center">
                    <button
                      style={{
                        textDecoration: "none",
                        padding: "8px 20px ",
                        borderRadius: "10px",
                        color: "#fff",
                        background: "#11b1F5",
                      }}
                      className="border-0 mb-5"
                      type=""
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NftModal;
