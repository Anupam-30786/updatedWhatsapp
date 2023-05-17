import React, { useState, useRef, useContext } from "react";
import { Container, Button } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ClickContext from "./Context/ClickContext";
import WhatsAppNavbar from "./Navbar";

function SignUp() {
  const navigate = useNavigate();

  const userRef = useRef("");
  const emailRef = useRef("");
  const mobileNumberRef = useRef("");

  const {
    mobileNumber,
    setMobileNumber,
    validateUser,
    userName,
    setUserName,
    email,
    setEmail,
    getUser,
  } = useContext(ClickContext);

  // function to validate user and if true then register
  console.log(userName);
  // const validateUser = (event) => {
  //   event.preventDefault();
  //   const user = {
  //     Name: userName,
  //     PhoneNumber: mobileNumber,
  //     email: email,
  //     chats: [],
  //   };

  //   if (!userName || !mobileNumber) {
  //     toast.error("input feilds can not be empty");
  //   } else {
  //     getUser(user);
  //   }
  // };

  return (
    <div>
      <WhatsAppNavbar />
      <h4 className="mt-5" style={{ textAlignLast: "center" }}>
        Registration Page
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
            onClick={async (e) => {
              if (validateUser(e)) {
                await getUser("Register", true);
                console.log("true");
              } else toast.error("Input field can not be empty");
            }}
          >
            Register
          </Button>
          <br></br>
          <p>
            Already a User click to{" "}
            <Button
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign In
            </Button>
          </p>
        </form>
      </Container>
    </div>
  );
}

export default SignUp;
