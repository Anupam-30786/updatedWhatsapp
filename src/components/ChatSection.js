import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import "../styles/App.css";
import ClickedUser from "./clickedUser";
import ClickContext from "./Context/ClickContext";

function ChatSection() {
  const { isCLicked, setIsClicked } = useContext(ClickContext);
  return (
    <div className=" bg-light w-100  m-1 " style={{ height: 100 + "vh" }}>
      <div id="imagecontainer" className="w-100 justify-content-center ">
        <ClickedUser />
      </div>
    </div>
  );
}
export default ChatSection;
