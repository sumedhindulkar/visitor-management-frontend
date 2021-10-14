import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";
import H5 from "@material-tailwind/react/Heading5";
import LeadText from "@material-tailwind/react/LeadText";
import b1 from "assets/img/b1.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function ProfileCard() {
  const { id } = useParams();
  const [building, setBuilding] = useState(null);
  useEffect(() => {
    const fetchVisitors = async () => {
      var URL = "/api/building/" + id;
      const { data } = await axios.get(URL).catch((err) => console.log(err));

      setBuilding(data);
    };
    fetchVisitors();
  }, []);
  return (
    <Card>
      <div className="flex flex-wrap justify-center">
        <div className="w-48 px-4 -mt-24">
          <Image src={building && building.photo} rounded raised />
        </div>
        <div className="w-full flex justify-center py-4 lg:pt-4 pt-8">
          <div className="p-4 text-center">
            <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
              22
            </span>
            <span className="text-sm text-gray-700">Floors</span>
          </div>
          <div className="p-4 text-center">
            <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
              3
            </span>
            <span className="text-sm text-gray-700">wings</span>
          </div>
          {/* <div className="p-4 text-center">
            <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
              10
            </span>
            <span className="text-sm text-gray-700">Photos</span>
          </div> */}
        </div>
      </div>
      <div className="text-center">
        <H5 color="gray">{building && building.name}</H5>
        <div className="mt-0 mb-2 text-gray-700 flex items-center justify-center gap-2">
          <LocationOnIcon />
          Mulund west mumbai 400080
        </div>
        <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
          <PersonIcon /> Secretary - Harshad Mehta
        </div>
        <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
          {/* <Icon name="account_balance" size="xl" /> */}
          Contact details 7008996521
        </div>
      </div>
      <CardBody>
        <div className="border-t border-lightBlue-200 text-center px-2 ">
          <LeadText color="blueGray">
            Check in unlimited visitors With VManagement, you can welcome your
            guests in the most professional smart, and digital way. Customized
            Registration Process Hosts can customize the registration process
            completely to suit your business needs.
          </LeadText>
        </div>
      </CardBody>
    </Card>
  );
}
