import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function BuildingVisitors() {
  const { id } = useParams();
  const [visitors, setVisitors] = useState(null);
  useEffect(() => {
    const fetchVisitors = async () => {
      var URL = "/api/building/" + id;
      var { data } = await axios.get(URL).catch((err) => console.log(err));
      setVisitors(data);
    };
    fetchVisitors();
  }, []);

  return (
    <div>
      <h2>This Visitors Page of {visitors && visitors.name}</h2>
      <div>
        {visitors &&
          visitors.visitors.map((item) => {
            return (
              <div style={{ margin: "18px 0" }}>
                <h4>{item.vName}</h4>
                <h4>{item.vPhone}</h4>
                <h4>{item.visitAddress}</h4>
                <h4>{item.visitTime}</h4>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default BuildingVisitors;
