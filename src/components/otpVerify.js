import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { toast } from "react-hot-toast";

function OtpVerify() {
  const navigate = useNavigate();
  const inputRef = useRef("");
  const [inputValue, setInputValue] = useState();
  const location = useLocation();
  console.log(inputValue);
  const email = location.state.user.email;
  const veriFy = async () => {
    //console.log(inputValue);
    const res = await fetch(`http://localhost:9090/Register/veriFy`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...location.state.user,
        otp: inputValue,
      }),
    });
    const data = await res.json();
    if (data.Name) {
      console.log("otp data is", data);
      navigate("/home");
    } else {
      // console.log(data.isTrue);
      toast.error("otp is invalid");
    }
  };
  return (
    <div>
      <form className="d-flex justif-content-center">
        <h3>{"enter otp sent to " + email}</h3>
        <input
          type="text"
          ref={inputRef}
          onChange={(e) => {
            setInputValue(inputRef.current.value);
          }}
        />
        <Button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            veriFy();
          }}
        >
          submit
        </Button>
      </form>
    </div>
  );
}

export default OtpVerify;
