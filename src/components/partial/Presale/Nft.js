import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../Nav";
import WalNav from "../WalNav";

const Nft = () => {
  const navigate = useNavigate();
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

  const handleDetails = (id) => {
    console.log(id);
    navigate(`/nft/${id}`);
  };

  return (
    <>
      <div className="d-flex">
        <Nav />

        <section className="home_contents">
          <WalNav />
          <div className="container mx-auto my-5">
            <h1 className="mb-5 text-center">NFT</h1>
            <div className="row g-5">
              {nftPic.map((nft) => (
                <div className="col-12 col-md-6 col-lg-4" key={nft.id}>
                  <div className="shadow p-2">
                    {/* <Link to="/nftDetails"> */}
                      <img
                      onClick={() => handleDetails(nft.id)}
                        className="img-fluid w-100 h-100"
                        src={nft.pic}
                        alt=""
                      />
                    {/* </Link> */}

                    <p className="mt-3">Price: {nft.price} BNB</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Nft;
