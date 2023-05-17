import React, { useContext } from "react";
import { Card, Image } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import "../styles/App.css";
import ChatUser from "./ChatUser";

import ClickContext from "./Context/ClickContext";

function User({ user, Component }) {
  const istrue = Component.type === ChatUser;
  // console.log("hello", user);

  const {
    setIsClicked,
    setCurrentUser,
    isClicked,
    currentUser,
    notification,
    setNotification,
  } = useContext(ClickContext);
  console.log("message", user.messages.length);
  return (
    <Card
      className={
        istrue
          ? "col d-flex flex-row h6"
          : "  d-flex flex-row h6 fixed-top  ms-auto "
      }
      style={{
        objectFit: "none",
        height: 73 + "px",
        width: !istrue ? "73.5vw" : "",
        backgroundColor: "whitesmoke",
      }}
      onClick={() => {
        setIsClicked(true);
        setNotification(0);
        setCurrentUser(user);
        console.log("currentUser is", currentUser);
        console.log(isClicked, currentUser);
      }}
    >
      <Card.Body className="d-flex flex-row">
        <div
          className={
            istrue
              ? "d-flex  justify-content-center bg-success align-items-sm-center  "
              : "d-flex  justify-content-center bg-success align-items-sm-center"
          }
        >
          <Image
            className="carousel-control-next-icon img icon"
            src="https://www.thefamouspeople.com/profiles/images/ab-de-villiers-1.jpg"
            roundedCircle={true}
          />
        </div>
        <div
          className={
            istrue
              ? " d-flex justify-content-center flex-column w-75 icon"
              : "align-self-md-center icon justify-content-center ms-4"
          }
        >
          <span className="col-4 ms-3" style={{ fontWeight: "bold" }}>
            {user.name}
          </span>

          {istrue ? (
            <div className="d-flex justify-content-between">
              <p
                align="center"
                className="ps-4"
                style={{ fontSize: "small", fontWeight: "100" }}
              >
                {user.messages[user.messages.length - 1]?.message}
              </p>
              <span className="align-self-end align-self-sm-start ps-4 rounded-circle bg-alert">
                <p>{notification > 0 ? notification : ""}</p>
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default User;
