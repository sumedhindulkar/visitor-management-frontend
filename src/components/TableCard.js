import React, { useState, useEffect } from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";
import Team4 from "assets/img/team-4-470x470.png";
import axios from "axios";

export default function CardTable({ bid }) {
  const date = new Date();
  const today = date.toDateString();
  const [visitors, setVisitors] = useState(null);
  const [visitorDate, setVisitorDate] = useState(null);
  var dateChange = new Date().getDate();
  useEffect(() => {
    const fetchVisitors = async () => {
      var URL = "/api/building/" + bid;
      const { data } = await axios.get(URL).catch((err) => console.log(err));
      setVisitors(data.visitors);
    };
    fetchVisitors();
    setInterval(() => {
      fetchVisitors();
    }, 5000);
  }, []);
  const changeDate = (e) => {
    if (dateChange != e) {
      dateChange = e;
      return true;
    }
    return false;
  };
  return (
    <Card>
      <CardHeader color="blue" contentPosition="left">
        <h2 className="text-white text-2xl">Visitors Today: {today}</h2>
      </CardHeader>

      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Name
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Phone
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Address
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Users
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Timing
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Reason
                </th>
              </tr>
            </thead>
            <tbody>
              {visitors &&
                visitors
                  .slice(0)
                  .reverse()
                  .map((item) => {
                    return (
                      <>
                        {changeDate(new Date(item.visitTime).getDate()) ? (
                          <div style={{ backgroundColor: "lightgrey" }}>
                            {new Date(item.visitTime).toDateString()}
                          </div>
                        ) : null}
                        <tr>
                          <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                            {item.vName}
                          </th>
                          <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                            {item.vPhone}
                          </th>
                          <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                            <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{" "}
                            {item.visitAddress}
                          </th>
                          <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                            <div className="flex">
                              <div className="w-10 h-10 rounded-full border-2 border-white ">
                                <Image src={item.vPhoto} rounded alt="..." />
                              </div>
                            </div>
                          </th>
                          <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                            {new Date(item.visitTime).toLocaleTimeString()}
                          </th>
                          <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                            {item.visitReason}
                          </th>
                        </tr>
                      </>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
