import React from "react";
import { Link } from "react-router-dom";
import Nav from "./partial/Nav";
import WalNav from "./partial/WalNav";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="d-flex">
        <Nav />

        <section className="home_contents">
          <WalNav />
          <div className="container mx-auto">
            <h1 className="homeHeading">
              x3Launch is a global Launchpad for Blockchain Projects
            </h1>
            <div>
              <div
                style={{ marginBottom: "6px", marginTop: "30px" }}
                className="linki"
              >
                <Link
                  to="/detail"
                  style={{ textDecoration: "none", color: "#11b1F5" }}
                >
                  {" "}
                  <i
                    className="fa-solid fa-chart-line"
                    style={{ marginRight: "0px", color: "#11b1F5" }}
                  ></i>{" "}
                  Trending
                </Link>
              </div>
              {/* <div className="home_second_wrap  row">
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
                          BNB
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
                          BNB
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
                          BNB
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div> */}
              <Carousel
                className="home_second_wrap pb-5 pt-2"
                responsive={responsive}
                swipeable={true}
                infinite={true}
                arrows={false}
                showDots={true}
              >
                <div className="row">
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
                          BNB
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="row">
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
                          BNB
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="row">
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
                          BNB
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </Carousel>
              <Link to="/projects" style={{backgroundColor:"#dedcdc", fontSize:"12px"}} type="button" class="btn fw-bold">
                View All
              </Link>
            </div>

            <div className="home_contributaion">
              <div id="contr01" className="contribution_wrap">
                <div className="contribution_icon">
                  <i class="fa-sharp fa-solid fa-share-nodes"></i>
                </div>
                <div className="contribution_content">
                  <h4>
                    Projects <span className="pdot">..........</span>
                  </h4>
                  <h3>110+</h3>
                </div>
              </div>

              <div className="contribution_wrap">
                <div className="contribution_icon">
                  <i class="fa-solid fa-users"></i>
                </div>
                <div className="contribution_content">
                  <h4>Community Holders</h4>
                  <h3>3450+</h3>
                </div>
              </div>

              <div className="contribution_wrap">
                <div className="contribution_icon">
                  <i className="fa-solid fa-hand-holding-dollar"></i>
                </div>
                <div className="contribution_content">
                  <h4>Total funding</h4>
                  <h3>$142,392</h3>
                </div>
              </div>
            </div>

            <h2
              style={{
                textAlign: "center",
                fontSize: "30px",
                marginTop: "20px",
              }}
            >
              Support innovative projects in the Blockchain ecosystem
            </h2>

            <div
              className="homecreate"
              style={{ padding: "30px 0px", textAlign: "center" }}
            >
              <Link
                to="/privatesale"
                style={{
                  textDecoration: "none",
                  padding: "8px 20px ",
                  borderRadius: "10px",
                  color: "#fff",
                  background: "#11b1F5",
                }}
              >
                Create
              </Link>
            </div>
            <h2
              style={{
                textAlign: "center",
                fontSize: "30px",
              }}
            >
              x3Launch gives projects early access to offer presale and build
              community
            </h2>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
