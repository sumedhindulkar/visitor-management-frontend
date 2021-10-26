import React, { useRef, useState } from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import Button from "@material-tailwind/react/Button";
import H5 from "@material-tailwind/react/Heading5";
import Alert from "@material-tailwind/react/Alert";

import "assets/styles/app.css";
import axios from "axios";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      console.log(userData);
      setError("");
      // const status = await axios.post("/login/user", data, config);
      var status = await axios({
        url: "/api/login/user",
        method: "POST",
        data: userData,
      });
      console.log("login status", status);
    } catch (err) {
      setError("Failed to Login:" + err);
      console.log(err);
    }
  };
  return (
    <>
      <div className="signup -ml-64 d-flex justify-content-center align-items-center h-100">
        <Card>
          <CardHeader color="lightBlue" size="lg">
            <H5 color="white">Log In </H5>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardBody>
              {error && (
                <div className="mt-4 mb-8 px-4">
                  <Alert color="deepOrange">{error}</Alert>
                </div>
              )}

              <div className="mb-8 px-4">
                <input
                  type="email"
                  color="lightBlue"
                  placeholder="Email Address"
                  ref={emailRef}
                />
              </div>
              <div className="mb-4 px-4">
                <input
                  type="password"
                  color="lightBlue"
                  placeholder="Password"
                  ref={passwordRef}
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
                  Login
                </Button>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
