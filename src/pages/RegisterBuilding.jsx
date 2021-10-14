import React, { useRef, useState } from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import Button from "@material-tailwind/react/Button";
import H5 from "@material-tailwind/react/Heading5";
import Alert from "@material-tailwind/react/Alert";
import FileBase64 from "react-file-base64";
import "assets/styles/app.css";
import axios from "axios";

export default function RegisterBuilding() {
  const [data, setData] = useState({
    name: "",
    password: "",
    photo: "",
    email: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  // const handlePhoto = (e) => {
  //   setData((prev) => {
  //     return { ...prev, photo: e.target.files };
  //   });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      const status = await axios({
        url: "/api/building",
        method: "POST",
        data: data,
      });
      console.log("login status", status);
    } catch (err) {
      setError("Failed to create your account");
      console.log(err);
    }
  };
  return (
    <>
      <div className="signup -ml-64 d-flex justify-content-center align-items-center h-100">
        <Card>
          <CardHeader color="lightBlue" size="lg">
            <H5 color="white">Signup Building</H5>
          </CardHeader>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <CardBody>
              {error && (
                <div className="mt-4 mb-8 px-4">
                  <Alert color="deepOrange">{error}</Alert>
                </div>
              )}
              <div className="mb-8 px-4">
                <input
                  name="name"
                  type="text"
                  color="lightBlue"
                  placeholder="Name"
                  onChange={handleChange}
                  value={data.name}
                />
              </div>

              <div className="mb-8 px-4">
                <input
                  name="email"
                  type="email"
                  color="lightBlue"
                  placeholder="Email Address"
                  onChange={handleChange}
                  value={data.email}
                />
              </div>
              <div className="mb-4 d-flex px-4">
                {/* <input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  name="photo"
                  color="lightBlue"
                  placeholder="photo"
                  onChange={handleChange}
                /> */}
                <FileBase64
                  multiple={false}
                  onDone={({ base64 }) => {
                    setData((prev) => {
                      return { ...prev, photo: base64 };
                    });
                  }}
                />
              </div>
              <div className="mb-4 px-4">
                <input
                  type="password"
                  name="password"
                  color="lightBlue"
                  placeholder="Password"
                  onChange={handleChange}
                  value={data.password}
                />
              </div>
            </CardBody>
            <CardFooter>
              <div className="flex justify-center">
                <Button
                  color="lightBlue"
                  buttonType="link"
                  size="lg"
                  ripple="dark"
                >
                  Register
                </Button>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
