import React, { useRef } from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import Button from "@material-tailwind/react/Button";
import H5 from "@material-tailwind/react/Heading5";
import Alert from "@material-tailwind/react/Alert";

import "assets/styles/app.css";
import { useState } from "react";
export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value != passwordConfirmRef.current.value) {
      return setError("password donot match");
    }
    try {
      setError("");
    } catch (err) {
      setError("Failed to create" + err);
      console.log(err);
    }
  };
  return (
    <>
      <div className="signup -ml-64 d-flex justify-content-center align-items-center h-100">
        <Card>
          <CardHeader color="lightBlue" size="lg">
            <H5 color="white">Signup </H5>
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
              <div className="mb-4 px-4">
                <input
                  type="password"
                  color="lightBlue"
                  placeholder="Password Confirmation"
                  ref={passwordConfirmRef}
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
                  Signup
                </Button>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
