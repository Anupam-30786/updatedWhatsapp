import React from "react";
import WhatsAppNavbar from "./Navbar";
import { Container, Button } from "react-bootstrap";
import { useRef, useState, useContext } from "react";
import ClickContext from "./Context/ClickContext";
import { toast } from "react-hot-toast";

function Login() {
  const userRef = useRef("");
  const emailRef = useRef("");

  const mobileNumberRef = useRef("");

  const {
    mobileNumber,
    setMobileNumber,
    userName,
    setEmail,
    email,
    setUserName,
    validateUser,
    getUser,
  } = useContext(ClickContext);
  return (
    <div>
      <WhatsAppNavbar />
      <h4 className="mt-5" style={{ textAlignLast: "center" }}>
        Login
      </h4>
      <Container className="align-content-center bg-success container d-flex flex-column flex-wrap mt-4 w-50 ">
        <form className="d-flex flex-column mt-3">
          <label>Enter Your Name</label>
          <input
            type="text"
            ref={userRef}
            value={userName}
            onChange={() => {
              setUserName(userRef.current.value);
            }}
            required
          />

          <label>Email Id</label>
          <input
            type="text"
            ref={emailRef}
            value={email}
            onChange={() => {
              setEmail(emailRef.current.value);
            }}
            required
          />

          <label>Enter your mobile number</label>
          <input
            type="text"
            ref={mobileNumberRef}
            value={mobileNumber}
            onChange={() => {
              setMobileNumber(mobileNumberRef.current.value);
            }}
            required
          />
          <Button
            className="bg-dark mt-3 mb-2 "
            type="submit"
            onClick={(e) => {
              if (validateUser(e)) {
                console.log("successfull logged in");
                getUser("login", false);
              } else {
                toast.error("Input field can not be empty");
              }
            }}
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default Login;
