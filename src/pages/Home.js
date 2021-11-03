import React from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import Button from "@material-tailwind/react/Button";
import H5 from "@material-tailwind/react/Heading5";
import Alert from "@material-tailwind/react/Alert";
import { NavLink } from "react-router-dom";
import "assets/styles/app.css";
function Home() {
  return (
    <div className="home signup -ml-64 d-flex justify-content-center align-items-center h-100">
      <Card>
        <CardHeader color="purple" size="lg">
          <H5 color="white">Visitor Management System </H5>
        </CardHeader>

        <CardBody>
          <div className="mb-8 px-4">
            <H5>Facility side</H5>
            <ul>
              <li>To keep watch of the visitors entering society</li>
              <li>To Generate thier unique QR code</li>
            </ul>
          </div>
          <div className="mb-4 px-4">
            <H5>Visitor side</H5>
            <ul>
              <li>
                To scan the society QR code and fill the required details while
                entering
              </li>
              <li>
                After filling the form visitors data will be saved in Society
                dashboard
              </li>
            </ul>
          </div>
          <div className="mb-4 px-4">
            <H5>Technology used</H5>
            <ul>
              <li>React.js, Node.js, MongoDB</li>
            </ul>
          </div>
        </CardBody>
        <CardFooter>
          <div className="flex justify-center">
            <a href="/building/616705fe55a06bde68e29ec0" target="_blank">
              <Button color="purple" size="lg">
                Facility side
              </Button>
            </a>
            <a href="/RegisterUser" target="_blank">
              <Button color="purple" buttonType="link" size="lg" ripple="dark">
                visitor side
              </Button>
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Home;
