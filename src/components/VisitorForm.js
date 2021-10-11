import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "assets/styles/visitorform.css";
import b1 from "assets/img/b1.jpg";
export default function VisitorForm() {
  const { bid, uid } = useParams();
  const [visitorDetails, setVisitorsDetails] = useState(null);
  const [buildingDetails, setBuildingDetails] = useState(null);
  useEffect(() => {
    const fetchVisitors = async () => {
      var { data } = await axios
        .get("/api/building/" + bid)
        .catch((err) => console.log(err));
      setBuildingDetails(data);
      var { data } = await axios
        .get("/api/user/" + uid)
        .catch((err) => console.log(err));
      setVisitorsDetails({
        vName: data.name,
        vPhone: data.phone,
        visitAddress: "",
        visitReason: "",
      });
    };
    fetchVisitors();
  }, []);
  const addVisitorHandleChange = (event) => {
    const { name, value } = event.target;
    setVisitorsDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const resetInputs = () => {
    setVisitorsDetails(() => {
      return {
        vName: "",
        vPhone: "",
        visitAddress: "",
        visitReason: "",
      };
    });
  };
  const submit = async (event) => {
    const URL = "/api/building/" + bid + "/visitor";
    await axios({
      url: URL,
      method: "POST",
      data: visitorDetails,
    }).catch((err) => {
      console.log(err);
    });
    resetInputs();
  };
  return (
    <div className="visitor-form">
      <div class="page-content">
        <div class="form-v6-content">
          <div class="form-left">
            <img src={b1} alt="form" />
          </div>
          <form onSubmit={submit} class="form-detail">
            <h2>Visitor Form of {buildingDetails && buildingDetails.name}</h2>
            {/* <div class="form-row">
              <input
                type="text"
                name="vName"
                value={visitorDetails && visitorDetails.name}
                class="input-text"
                placeholder="Your Name"
                required
              />
            </div>
            <div class="form-row">
              <input
                type="text"
                name="vPhone"
                class="input-text"
                value={visitorDetails && visitorDetails.phone}
                placeholder="Phone number"
                required
              />
            </div> */}
            <div class="form-row">
              <input
                type="text"
                name="visitAddress"
                class="input-text"
                placeholder="Address eg. B402"
                required
                onChange={addVisitorHandleChange}
              />
            </div>
            <div class="form-row">
              <input
                type="text"
                name="visitReason"
                class="input-text"
                placeholder="Reason of visit"
                required
                onChange={addVisitorHandleChange}
              />
            </div>
            <div class="form-row-last">
              <button class="register py-3">Submit</button>
            </div>
          </form>
        </div>
      </div>
      ​
    </div>
  );
}
