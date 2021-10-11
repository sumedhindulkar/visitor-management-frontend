import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StatusCard from "components/StatusCard";
import TableCard from "components/TableCard";
import Sidebar from "components/Sidebar";
import axios from "axios";
import Footer from "components/Footer";
export default function Dashboard() {
  const { id } = useParams();
  const [visitorsCount, setVisitorsCount] = useState(null);
  useEffect(() => {
    const fetchVisitors = async () => {
      var URL = "/api/building/" + id;
      const { data } = await axios.get(URL).catch((err) => console.log(err));

      setVisitorsCount(data.visitors.length);
    };
    setInterval(() => {
      fetchVisitors();
    }, 4000);
    fetchVisitors();
  }, []);
  return (
    <>
      <Sidebar bid={id} />
      <div className="bg-light-blue-500 px-3 md:px-8 h-40" />

      <div className="px-3 md:px-8 -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mb-4">
            <StatusCard
              color="pink"
              icon="trending_up"
              title="Visitors Past Month"
              amount={visitorsCount && visitorsCount}
            />
            <StatusCard
              color="orange"
              icon="groups"
              title="Visitors Today"
              amount={visitorsCount && visitorsCount}
            />
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8 h-auto ">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <TableCard bid={id} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
