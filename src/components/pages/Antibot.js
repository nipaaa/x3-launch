import React, { useState } from "react";
import Nav from "../partial/Nav";
import WalNav from "../partial/WalNav";
const Antibot = () => {
  const dn = "none";
  const dop = "block";
  const [op, setOp] = useState(dop);

  return (
    <>
      <div className="d-flex">
        <Nav />

        <section className="home_contents">
          <WalNav />
          <div className="container mt-5 mx-auto ">
            <div className="searchBox">
              <form>
                <div className="form-group mt-2">
                  <input
                    type="text"
                    className="form-control preinput"
                    placeholder="Search By Token Address"
                  />
                </div>
              </form>
              <div className="btnWraper">
                <button onClick={() => setOp(dop)}>All</button>
                <button onClick={() => setOp(dn)}>My Locks</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Antibot;
