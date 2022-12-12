import React, { useEffect, useState } from "react";

const NftJson = () => {
  const [nftPic, setNftPic] = useState([]);

  useEffect(() => {
    fetch("nft.json")
      .then((res) => res.json())
      .then((data) => setNftPic(data));
  }, []);
  return (
    <div className="row g-5 mt-5">
      {nftPic.map((nft) => (
        <div className="col-12 col-md-6 col-lg-4" key={nft.id}>
          {/* <!-- Button trigger modal --> */}
          <div data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div className="shadow p-2">
              <img
                style={{ height: "300px", objectFit: "cover" }}
                className=" w-100 img-fluid"
                src={nft.pic}
                alt=""
              />
              <div className="d-flex justify-content-between fw-bold mt-2">
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
                <div class="modal-header">
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
                  <div className="d-flex justify-content-between fw-bold mt-2">
                    <h2>{nft.id}.</h2>
                    <h2 className=""> {nft.price} BNB</h2>
                  </div>
                  <div className="mb-4">
                    <p className="fw-bold m-0">Description:</p>
                    <p>The cats are wild and we are the human who love them</p>
                  </div>
                  <div className="mb-4">
                    <p className="fw-bold">Characteristics</p>
                    <p>Blue eyes 100%</p>
                    <p>Yellow Skin %</p>
                    <p>grey background 90%</p>
                  </div>
                  <div className="mb-4">
                    <p className="fw-bold">End date:</p>
                    <p>February 15, 2023</p>
                  </div>
                  <div className="mb-4">
                    <p className="fw-bold">Contract Address</p>
                    <p className="text-primary">KHH 25 NHGFG</p>
                  </div>
                  <div className="mb-4">
                    <p className="fw-bold">Token ID:</p>
                    <p>9</p>
                  </div>
                  <div className="mb-4">
                    <p className="fw-bold">Token Standard:</p>
                    <p>Bep-20</p>
                  </div>
                  <div className="mb-4">
                    <p className="fw-bold">Blockchain:</p>
                    <p>Binance</p>
                  </div>

                  <button className="px-3 py-2 bg-white text-center" type="">
                    Buy Now
                  </button>
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
