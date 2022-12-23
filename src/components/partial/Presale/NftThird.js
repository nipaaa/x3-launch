import moment from "moment/moment";
import React, { useEffect, useState } from "react";

const NftThird = ({ pdn1, pBtnBack, pBtn1 }) => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [daysDifference, setDaysDifference] = useState("")



  console.log(startTime);
  console.log(endTime);

  // var time = moment(startTime, "DD/MM/YYYY");
  // var time2 = moment(endTime, "DD/MM/YYYY");
   //  console.log(time.diff(time2, "days") + " days");
  var date1, date2;  
  date1 = new Date(startTime);  
  date2 = new Date(endTime);  

  var time_difference =  date2.getTime() - date1.getTime();  
  
  //calculate days difference by dividing total milliseconds in a day  
  var days_difference = time_difference / (1000 * 60 * 60 * 24);  
  
  useEffect(() => {setDaysDifference(days_difference)}, [days_difference])

  console.log(days_difference, "days")

  console.log(daysDifference)

 



  const select = [];
  for (let i = 45; i <= 100; i++) {
    select.push(i);
  }

  return (
    <>
    
      <div
        className="col-12 col-md-8 col-lg-8 col-xl-8  rightPresale rightpresalem"
        style={{ display: pdn1 }}
      >
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <p>{"(*)"} is required field.</p>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Quantity of Presale NFT{" "}
                  <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="number"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="2500"
                />
              </div>
            </form>

            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Softcap BNB <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="  5 BNB"
                />
              </div>
            </form>
            <form>
              <div className="form-group">
                <p>{"(*)"} is required field.</p>
                <label for="exampleInputEmail1">
                  Start Time <span style={{ color: "red" }}>*</span>{" "}
                  <span style={{ fontSize: "12px" }}>
                    (NFT collection will expire after 40 days)
                  </span>
                </label>
                <input
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  type="date"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="  0.3 BNB"
                />
              </div>
            </form>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Logo URL <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  value="/favicon.ico"
                  placeholder="  5 BNB"
                  required
                />
                <input name="upload Logo" type="file" />
              </div>
            </form>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <p>.</p>

            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  NFT Project Name<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="X3LA Token"
                />
              </div>
            </form>

            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Hardcap BNB <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder=" 0.3 BNB"
                />
              </div>
            </form>
            <form>
              <div className="form-group">
              {days_difference > 40 ? alert('Select date less than or equal to 40 days') : "" }
                <p>.</p>
                <label for="exampleInputEmail1">
                  END Time <span style={{ color: "red" }}>*</span>{" "}
                  <span style={{ fontSize: "12px" }}>
                    (The end date must not exceed 40 days from the start date)
                  </span>
                </label>
                <input
                  type="date"
                  value={endTime}
                  
                  onChange={(e) => setEndTime(e.target.value)}
                  className="form-control preinput"
                  placeholder="  3 BNB"
                />
              </div>
            </form>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Banner URL</label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="Ex :"
                />
                <input name="upload Logo" type="file" />
              </div>
            </form>
          </div>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Category</label>
          <input
            type="text"
            className="form-control preinput"
            id="exampleInputEmail1"
            placeholder="NFT Presale"
          />
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Website<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder=""
                  required
                />
              </div>
            </form>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">coinHunt.cc</label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="Ex :"
                />
              </div>
            </form>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">directoapp</label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="Ex :"
                />
              </div>
            </form>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Github</label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="Ex :"
                />
              </div>
            </form>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Instagram</label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="Ex :"
                />
              </div>
            </form>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Reddit</label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="Ex :"
                />
              </div>
            </form>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Promo Video</label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="https://youtu.be/ahobeirZzp.."
                />
              </div>
            </form>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">whitepaper</label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="Ex :"
                />
              </div>
            </form>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Twitter</label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="Ex :"
                />
              </div>
            </form>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Telegram</label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="Ex :"
                />
              </div>
            </form>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Discord</label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="Ex :"
                />
              </div>
            </form>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Medium</label>
                <input
                  type="text"
                  className="form-control preinput"
                  id="exampleInputEmail1"
                  placeholder="Ex :"
                />
              </div>
            </form>
          </div>
        </div>

        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">
              Description <span style={{ color: "red" }}>*</span>
            </label>
            <textarea
              style={{ height: "150px" }}
              type="text"
              className="form-control preinput"
              id="exampleInputEmail1"
              placeholder="Ex :"
              required
            ></textarea>
          </div>
        </form>

        <div className="d-flex">
          <button onClick={() => pBtnBack()} className="nextBtn me-3">
            Back
          </button>
          <button onClick={() => pBtn1()} className="nextBtn">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default NftThird;
