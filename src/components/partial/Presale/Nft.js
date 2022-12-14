import React, { useContext, useEffect, useState } from "react";
import Nav from "../Nav";
import WalNav from "../WalNav";
import NftCollection from "./NftCollection";
import NftProgressbar from "./NftProgressbar";
import NftSecond from "./NftSecond";
import NftThird from "./NftThird";
import PreFive from "./PreFive";
import  { Dat } from "./PreSecodPage";


const Nft = ({ setProjectNo }) => {
  const colora = "#11b1F5";
  const colorb = "rgb(35, 196, 3)";
  const colort = "#fff";
  const colortb = "#111";
  const dnone = "none";
  const dblock = "flex";

  const [bg, setBg] = useState(colora);
  const [tc, setTc] = useState(colort);
  const [pdn, setPdn] = useState(dblock);

  // mamtaz
  const [stepNo, setStepNo] = useState(0);

  const colora1 = "rgb(243 231 231)";
  const colorb1 = "rgb(35, 196, 3)";

  const [bg1, setBg1] = useState(colora1);
  const [tc1, setTc1] = useState(colortb);

  const [pdn1, setPdn1] = useState(dnone);
  const [pdn3, setPdn3] = useState(dnone);
  const [nft, setNft] = useState(dnone);
  const [pdn4, setPdn4] = useState(dnone);

  const pNft = () => {
    setBg2(colorb);
    setBg3(colora);
    setTc3(colort);
    setNft(dnone);
    setPdn3(dnone);
    setPdn4(dblock);
  };
  const pNftBack = () => {
    setBg2(colora);
    // setBg3(colorb);
    setTc3(colort);
    setPdn1(dblock);
    setNft(dnone);
    setPdn3(dnone);
  };
  const pBtn = () => {
    setBg(colorb);
    setBg1(colora);
    setPdn(dnone);
    setTc1(colort);
    setPdn1(dblock);
    // setNft(dnone);
  };

  const colora2 = "rgb(243 231 231)";
  const colorb2 = "rgb(35, 196, 3)";

  const [bg2, setBg2] = useState(colora2);
  const [tc2, setTc2] = useState(colortb);
  const pBtn1 = () => {
    setBg1(colorb);
    setBg2(colora);
    setPdn(dnone);
    setTc2(colort);
    setPdn1(dnone);
    setNft(dblock);
  };
  const pBtnBack = () => {
    setBg1(colora);
    // setBg2(colorb);
    setPdn(dblock);
    setTc2(colort);
    setPdn1(dnone);
    setPdn3(dnone);
  };
  const [bg3, setBg3] = useState(colora2);
  const [tc3, setTc3] = useState(colortb);
  const pBtn4 = () => {
    setBg2(colorb);
    setBg3(colora);
    setTc3(colort);
  };
  const pBtn4Back = () => {
    setBg2(colora);
    // setBg3(colorb);
    setTc3(colort);
    setPdn1(dnone);
    setPdn3(dnone);
    setPdn4(dnone);
    setNft(dblock);
  };

  const rdata = useContext(Dat);

  console.log(rdata);

  useEffect(() => {
    setProjectNo("project1");
  }, [stepNo]);

  return (
    <>
      <div className="d-flex">
        <Nav />

        <section className="home_contents">
          <WalNav />
          <div className="container presaleWrap mx-auto row">
            <div className="col-12 col-md-4 col-lg-4 col-xl-4 row ">
              <NftProgressbar
                bgcolor1={bg1}
                bgcolor={bg}
                textColor1={tc1}
                textColor={tc}
                bgcolor2={bg2}
                textColor2={tc2}
                bgcolor3={bg3}
                textColor3={tc3}
              />
            </div>
            <NftSecond setProjectNo={setProjectNo} pdn={pdn} pBtn={pBtn} />
            <NftThird
              pdn1={pdn1}
              pBtnBack={pBtnBack}
              pBtn1={() => pBtn1()}
            />
            <NftCollection nft={nft} pNftBack={pNftBack} pNft={pNft} />

            <PreFive pdn4={pdn4} pBtn4Back={pBtn4Back} pBtn4={() => pBtn4()} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Nft;
