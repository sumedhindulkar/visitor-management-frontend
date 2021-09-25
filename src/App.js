import React, { useState } from "react";
import BuildingForm from "./components/BuildingForm";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BuildingForm />
      <form>
        <h2>Form to add new user in a building</h2>
        <input type="text" placeholder="name" />
        <input type="number" placeholder="phone number" />
        <input type="text" placeholder="Address" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
