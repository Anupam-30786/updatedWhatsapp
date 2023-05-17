import React, { useContext, useEffect, useState } from "react";
import User from "./User";
import ClickContext from "./Context/ClickContext";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function ChatUser() {
  const navigate = useNavigate();
  const { searchArray } = useContext(ClickContext);
  return (
    <div>
      {searchArray.length > 0 ? (
        searchArray.map((user, i) => {
          //  console.log(i);
          return <User user={user} Component={<ChatUser />} />;
        })
      ) : (
        <Button
          onClick={() => {
            navigate("/Registration");
          }}
        >
          start chat
        </Button>
      )}
    </div>
  );
}

export default ChatUser;
