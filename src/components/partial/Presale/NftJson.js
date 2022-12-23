import React, { useEffect, useState } from "react";

const NftJson = () => {
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
          <div data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                <div class="modal-body">
                  <img
                    style={{ height: "300px" }}
                    className=" w-100 img-fluid"
                    src={nft.pic}
                    alt=""
                  />
                  <div        style={{ color: "#11b1f5" }} className="d-flex justify-content-between fw-bold mt-2">
                    <h2>{nft.id}.</h2>
                    <h2 className="">{nft.price} BNB</h2>
                  </div>
                  <div className="mb-3">
                    <p className="fw-bold m-0 p-0">Description:</p>
                    <p className="p-0 m-0">
                      The cats are wild and we are the human who love them
                    </p>
                  </div>
                  <div className="mb-3">
                    <p className="fw-bold p-0 m-0">Characteristics</p>
                    <p className="p-0 m-0">Blue eyes 100%</p>
                    <p className="p-0 m-0">Yellow Skin %</p>
                    <p className="p-0 m-0">grey background 90%</p>
                  </div>
                  <div className="mb-3">
                    <p className="fw-bold p-0 m-0">End date:</p>
                    <p className="p-0 m-0">February 15, 2023</p>
                  </div>
                  <div className="mb-3">
                    <p className="fw-bold p-0 m-0">Contract Address</p>
                    <p className="text-primary p-0 m-0">KHH 25 NHGFG</p>
                  </div>
                  <div className="mb-3">
                    <p className="fw-bold p-0 m-0">Token ID:</p>
                    <p className="p-0 m-0">9</p>
                  </div>
                  <div className="mb-3">
                    <p className="fw-bold p-0 m-0">Token Standard:</p>
                    <p className="p-0 m-0">Bep-20</p>
                  </div>
                  <div className="mb-3">
                    <p className="fw-bold p-0 m-0">Blockchain:</p>
                    <p className="p-0 m-0">Binance</p>
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
                      className="border-0"
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

export default NftJson;
