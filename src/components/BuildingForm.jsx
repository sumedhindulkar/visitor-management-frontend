import React, { useState } from "react";
import axios from "axios";
function BuildingForm() {
  const [buildingData, setBuildingData] = useState({
    name: "",
    address: "",
    floor: "",
  });
  const buildingHandleChange = (event) => {
    const { name, value } = event.target;
    setBuildingData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const resetInputs = () => {
    setBuildingData(() => {
      return { name: "", address: "", floor: "" };
    });
  };
  const submit = async (event) => {
    event.preventDefault();
    await axios({
      url: "/api/building",
      method: "POST",
      data: buildingData,
    }).catch((err) => {
      console.log(err);
    });
    resetInputs();
  };

  return (
    <div>
      <form onSubmit={submit}>
        <h2>From to add new building</h2>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={buildingData.name}
          onChange={buildingHandleChange}
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={buildingData.address}
          onChange={buildingHandleChange}
        />
        <input
          type="number"
          placeholder="Floors"
          name="floor"
          value={buildingData.floor}
          onChange={buildingHandleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default BuildingForm;
