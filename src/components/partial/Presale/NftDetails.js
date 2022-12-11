import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav";
import WalNav from "../WalNav";

const NftDetails = () => {
    const { id } = useParams();
    console.log(id);
    const [nft,setNft] = useState([]);
      useEffect(() => {
        fetch("nft.json")
          .then((res) => res.json())
          .then((data) => setNft(data));
      }, []);
   

  return (
    <>
      <div className="d-flex">
        <Nav />

        <section className="home_contents">
          <WalNav />
          <div className="container my-5">
            <div className="row g-5">
              <div className="col-12 col-md-6">

{
    nft.map(n=>{id === n.id ? <h1>{n.price}</h1> : <p></p>})
}



                <img
                  className="img-fluid"
                  src={nft.pic}
                  alt=""
                />
                <img
                  className="img-fluid"
                  src="https://i.seadn.io/gae/qwKgn-RNLfP9MwsI5Ugky7PjAnRgNh_DlR0-qeRS4Zx6npnYeNw7LbBFq23Yw1OZbvjPzDFYsoZIpEgkfhrp98SslGHFQbLjvXMun9k?auto=format&w=1000"
                  alt=""
                />
              </div>
              <div className="col-12 col-md-6">
                <h4>Bored Ape Bros #2309</h4>
                <p>Owned by CE6992</p>
                <p>
                  NFT means non-fungible tokens (NFTs), which are generally
                  created using the same type of programming used for
                  cryptocurrencies. In simple terms these cryptographic assets
                  are based on blockchain technology. They cannot be exchanged
                  or traded equivalently like other cryptographic assets. Like
                  Bitcoin or Ethereum.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NftDetails;
