import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import "../styles/App.css";
import UserSection from "./UserSection";
import "bootstrap/dist/css/bootstrap.min.css";
import ChatSection from "./ChatSection";
import { useMediaQuery } from "react-responsive";
import ClickContext from "./Context/ClickContext";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import RegistrationPage from "./SerachNewChat";
import Home from "./Home";
import SignUp from "./SignUp";
import OtpVerify from "./otpVerify";
import SerachNewChat from "./SerachNewChat";
import Login from "./login";
const App = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [searchArray, setSearchArray] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [notification, setNotification] = useState(0);
  const [Profiles, setProfiles] = useState([]);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const validateUser = (event) => {
    event.preventDefault();
    if (!userName || !mobileNumber) {
      return false;
    } else {
      return true;
    }
  };

  async function getUser(apiName, isNewUser) {
    const user = {
      Name: userName,
      PhoneNumber: mobileNumber,
      email: email,
      chats: [],
      isNewUser: isNewUser,
    };
    const res = await fetch(`http://localhost:9090/${apiName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const userDetails = await res.json();
    console.log("userDetails", userDetails);
    if (userDetails.err) {
      toast.error(userDetails.err);
      navigate("/");
    } else {
      console.log("hello");
      console.log(userDetails.otp);

      navigate("/otp", {
        state: {
          user: user,
        },
      });
    }
  }

  const getChatList = async (mobileNumber, methodType, inputuser) => {
    if (methodType === "GET") {
      const res = await fetch(
        `http://localhost:9090/getChatList/${mobileNumber}`
      );
      const storedData = await res.json();
      console.log("skja", storedData);
      if (storedData) return storedData;
    }

    if (methodType === "PATCH") {
      const upres = await fetch(
        `http://localhost:9090/chatUpdate/${mobileNumber}`,
        {
          method: "PATCH",
          body: JSON.stringify(inputuser),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await upres.json();
      console.log("data is ", data);
      console.log(mobileNumber);
      return data;
    }
  };

  return (
    <>
      <ClickContext.Provider
        value={{
          isClicked: isClicked,
          setIsClicked: setIsClicked,
          currentUser: currentUser,
          setCurrentUser: setCurrentUser,
          Profiles: Profiles,
          searchArray: searchArray,
          setSearchArray: setSearchArray,
          notification: notification,
          setNotification: setNotification,
          setProfiles: setProfiles,
          mobileNumber: mobileNumber,
          setMobileNumber: setMobileNumber,
          getChatList: getChatList,
          validateUser: validateUser,
          email: email,
          userName: userName,
          setEmail: setEmail,
          setUserName: setUserName,
          getUser: getUser,
        }}
      >
        <Toaster />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="otp" element={<OtpVerify />}></Route>
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/Registration" element={<SerachNewChat />}></Route>
        </Routes>
      </ClickContext.Provider>
    </>
  );
};

export default App;
