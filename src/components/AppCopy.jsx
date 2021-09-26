import React, { useState, useEffect } from "react";
import BuildingForm from "./components/BuildingForm";
import "./App.css";
import axios from "axios";
function App() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      var { data } = await axios
        .get("/api/buildings")
        .catch((err) => console.log(err));
      setUsers(data[0].name);
    };
    fetchUsers();
  }, []);
  return (
    <div className="App">
      {users && users}
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
