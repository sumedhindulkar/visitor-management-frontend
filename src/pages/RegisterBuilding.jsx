import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
import Loader from "components/Loader";
import jwt from "jsonwebtoken";
export default function RegisterBuilding() {
  const [userData, setUserData] = useState({
    name: "",
    password: "",
    photo: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  // const [user, setUser] = useState(false);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo) {
      if (!userInfo.user) {
        localStorage.removeItem("userInfo");
      }
      const link = "/building/" + userInfo.user.id;
      history.push(link);
    }
  }, [history]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  // const handlePhoto = (e) => {
  //   setUserData((prev) => {
  //     return { ...prev, photo: e.target.files };
  //   });
  // };
  const resetInputs = () => {
    setUserData({
      name: "",
      password: "",
      photo: "",
      email: "",
      phone: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      var { data } = await axios({
        url: "/api/building",
        method: "POST",
        data: userData,
      });
      // console.log(userData);
      localStorage.setItem("userInfo", JSON.stringify(data));
      const id = JSON.parse(localStorage.getItem("userInfo")).user.id;
      const link = "/building/" + id;
      history.push(link);
      resetInputs();
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("Failed to create your account" + err.response.data.message);
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
              {loading && <Loader />}
              <div className="mb-8 px-4">
                <input
                  name="name"
                  type="text"
                  color="lightBlue"
                  placeholder="Name"
                  onChange={handleChange}
                  value={userData.name}
                />
              </div>

              <div className="mb-8 px-4">
                <input
                  name="email"
                  type="email"
                  color="lightBlue"
                  placeholder="Email Address"
                  onChange={handleChange}
                  value={userData.email}
                />
              </div>
              <div className="mb-4 d-flex px-4">
                <FileBase64
                  multiple={false}
                  onDone={({ base64 }) => {
                    setUserData((prev) => {
                      return { ...prev, photo: base64 };
                    });
                  }}
                />
                <input
                  type="tel"
                  name="phone"
                  color="lightBlue"
                  placeholder="10 digit Phone number"
                  pattern="[0-9]{10}"
                  value={userData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 px-4">
                <input
                  type="password"
                  name="password"
                  color="lightBlue"
                  placeholder="Password"
                  onChange={handleChange}
                  value={userData.password}
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
