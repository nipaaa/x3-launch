import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../partial/Nav';
import WalNav from '../partial/WalNav';

const Projects = () => {
    return (
      <>
      <div className="d-flex">
        <Nav />

        <section className="home_contents">
          <WalNav />
          <div className="home_second_wrap  row my-5">
                <div className="col-12 col-md-4 col-lg-4 col-xl-4 row">
                  <div className="col-11 col-md-11 col-lg-11 col-xl-11  home_s_box m-auto">
                    <h5 style={{ marginBottom: "10px" }}>
                      <i
                        class="fa-brands fa-gripfire"
                        style={{ marginRight: "10px", color: "#11b1F5" }}
                      ></i>{" "}
                      Hot Contest
                    </h5>

                    <Link to="/detail" className="homeLinki mb-4">
                      <div className="subWrap">
                        <img src="images/cake.png" alt="token logo" />
                        <div className="swrapb">
                          <p>
                            PancakeSwap <br />
                            <span style={{ color: "grey" }}>CAKE</span>
                          </p>
                        </div>
                        <div
                          className="nbl"
                          style={{
                            padding: "2px 7px",
                            borderRadius: "10px",
                            background: "rgb(255 238 41 / 52%)",
                            fontWeight: "bold",
                          }}
                        >
                          BSC
                        </div>
                      </div>
                    </Link>
                    
                  </div>
                </div>

                <div className="col-12 col-md-4 col-lg-4 col-xl-4 row">
                  <div className="col-11 col-md-11 col-lg-11 col-xl-11  home_s_box m-auto">
                    <h5 style={{ marginBottom: "10px" }}>
                      {" "}
                      <i
                        className="fa-brands fa-gripfire"
                        style={{ marginRight: "10px", color: "#11b1F5" }}
                      ></i>{" "}
                      Hot Contest
                    </h5>

                    <Link
                      to="/detail"
                      className="homeLinki "
                      style={{ marginTop: "10px" }}
                    >
                      <div className="subWrap">
                        <img src="images/tinytesla.png" alt="token logo" />
                        <div className="swrapb">
                          <p>
                            tinytesla .........
                            <br />
                            <span style={{ color: "grey" }}>TINT</span>
                          </p>
                        </div>
                        <div
                          className="nbl"
                          style={{
                            padding: "2px 7px",
                            borderRadius: "10px",
                            background: "rgb(255 238 41 / 52%)",
                            fontWeight: "bold",
                          }}
                        >
                          BSC
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 col-xl-4 row">
                  <div className="col-11 col-md-11 col-lg-11 col-xl-11  home_s_box m-auto">
                    <h5 style={{ marginBottom: "10px" }}>
                      {" "}
                      <i
                        className="fa-brands fa-gripfire"
                        style={{ marginRight: "10px", color: "#11b1F5" }}
                      ></i>{" "}
                      Hot Contest
                    </h5>
                    <Link
                      to="/detail"
                      className="homeLinki "
                      style={{ marginTop: "10px" }}
                    >
                      <div className="subWrap">
                        <img src="images/doggy.png" alt="token logo" />
                        <div className="swrapb">
                          <p>
                            BABYDOGGY <br />
                            <span style={{ color: "grey" }}>BABYDOGGY</span>
                          </p>
                        </div>
                        <div
                          className="nbl"
                          style={{
                            padding: "2px 7px",
                            borderRadius: "10px",
                            background: "rgb(255 238 41 / 52%)",
                            fontWeight: "bold",
                          }}
                        >
                          BSC
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
        </section>
      </div>
    </>
      
    );
};

export default Projects;