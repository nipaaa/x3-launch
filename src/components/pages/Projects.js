import React from "react";
import { Link } from "react-router-dom";
import Nav from "../partial/Nav";
import WalNav from "../partial/WalNav";
import cake from "../../assets/cake.png";
import tinyTesla from "../../assets/tinytesla.png";
import doggy from "../../assets/doggy.png";

const Projects = () => {
  const projects = [
    {
      pic: cake,
      title: "PancakeSwap",
      description: "CAKE",
    },
    {
      pic: tinyTesla,
      title: "  tinytesla .........",
      description: "TINT",
    },
    {
      pic: doggy,
      title: "BABYDOGGY",
      description: "BABYDOGGY",
    },
    {
      pic: cake,
      title: "PancakeSwap",
      description: "CAKE",
    },
    {
      pic: tinyTesla,
      title: "  tinytesla .........",
      description: "TINT",
    },
    {
      pic: doggy,
      title: "BABYDOGGY",
      description: "BABYDOGGY",
    },
    {
      pic: cake,
      title: "PancakeSwap",
      description: "CAKE",
    },
    {
      pic: tinyTesla,
      title: "  tinytesla .........",
      description: "TINT",
    },
    {
      pic: doggy,
      title: "BABYDOGGY",
      description: "BABYDOGGY",
    },
    {
      pic: cake,
      title: "PancakeSwap",
      description: "CAKE",
    },
    {
      pic: tinyTesla,
      title: "  tinytesla .........",
      description: "TINT",
    },
    {
      pic: doggy,
      title: "BABYDOGGY",
      description: "BABYDOGGY",
    },
    {
      pic: cake,
      title: "PancakeSwap",
      description: "CAKE",
    },
    {
      pic: tinyTesla,
      title: "  tinytesla .........",
      description: "TINT",
    },
    {
      pic: doggy,
      title: "BABYDOGGY",
      description: "BABYDOGGY",
    },
    {
      pic: cake,
      title: "PancakeSwap",
      description: "CAKE",
    },
    {
      pic: tinyTesla,
      title: "  tinytesla .........",
      description: "TINT",
    },
    {
      pic: doggy,
      title: "BABYDOGGY",
      description: "BABYDOGGY",
    },
    {
      pic: cake,
      title: "PancakeSwap",
      description: "CAKE",
    },
    {
      pic: tinyTesla,
      title: "  tinytesla .........",
      description: "TINT",
    },
    {
      pic: doggy,
      title: "BABYDOGGY",
      description: "BABYDOGGY",
    },
    {
      pic: cake,
      title: "PancakeSwap",
      description: "CAKE",
    },
    {
      pic: tinyTesla,
      title: "  tinytesla .........",
      description: "TINT",
    },
    {
      pic: doggy,
      title: "BABYDOGGY",
      description: "BABYDOGGY",
    },
  ];
  return (
    <>
      <div className="d-flex">
        <Nav />

        <section className="home_contents">
          <WalNav />
          <div className="home_second_wrap row g-5 my-5 mx-0">
            {projects.map((project, index) => (
              <div key={index} className="col-12 col-md-4 col-lg-4 col-xl-4">
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
                        <img src={project.pic} alt="token logo" />
                        {/* <img src={project.pic} alt="token logo" /> */}
                        <div className="swrapb">
                          <p>
                            {project.title} <br />
                            <span style={{ color: "grey" }}>
                              {project.description}
                            </span>
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
              </div>
            ))}

            
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
