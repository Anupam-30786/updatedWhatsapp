import React, { useContext, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ClickContext from "./Context/ClickContext";

function SerachNewChat() {
  const userRef = useRef("");

  const [userId, setUserId] = useState("");
  const {
    setCurrentUser,
    setIsClicked,
    getChatList,
    setSearchArray,
    mobileNumber,
    setMobileNumber,
    searchArray,
  } = useContext(ClickContext);
  const navigate = useNavigate();

  const searchChat = async () => {
    let is_chat_present_in_chatlist = false;
    searchArray.forEach((element) => {
      if (element.PhoneNumber == userId) {
        is_chat_present_in_chatlist = true;
      }
    });
    if (is_chat_present_in_chatlist) {
      toast.error("user is already added to chat list");
    } else {
      const data = await getChatList(userId, "GET");

      if (data.PhoneNumber == userId) {
        const user = {
          name: data.Name,
          profilePic: data.profilePic,
          PhoneNumber: userId,

          messages: [],
        };
        const updatedData = await getChatList(mobileNumber, "PATCH", user);

        setSearchArray(updatedData.chats);
        setCurrentUser(user);
        setIsClicked(true);
        navigate("/Home");
      } else {
        toast.error("user not register with us");
      }
    }
    // const res = await fetch(`http://localhost:9090/searchChat/9548594`);
    // const storedData = await res.json();
    // if (storedData.phoneNumber === userId) {
  };
  // var storedData = JSON.parse(localStorage.getItem("data"));
  //storedData.chats.push(user);
  // console.log("the stored data is", storedData);

  //localStorage.setItem("data", JSON.stringify(storedData));

  return (
    <div>
      <input
        type="text"
        placeholder="Mobile number to chat"
        ref={userRef}
        value={userId}
        onChange={() => {
          setUserId(userRef.current.value);
        }}
      ></input>
      <button onClick={searchChat}>Add to chat</button>
    </div>
  );
}

export default SerachNewChat;
