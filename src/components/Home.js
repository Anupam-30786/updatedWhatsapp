import React, { useContext, useEffect } from "react";
import ChatSection from "./ChatSection";
import ClickContext from "./Context/ClickContext";
import UserSection from "./UserSection";

function Home() {
  const { setProfiles, setSearchArray, currentUser } = useContext(ClickContext);
  const { mobileNumber, getChatList } = useContext(ClickContext);

  useEffect(() => {
    async function getData() {
      //  console.log("hello");
      const storedData = await getChatList(mobileNumber, "GET");

      // console.log("storedData is", storedData);
      const chats = storedData.chats;
      setProfiles(chats);

      setSearchArray(chats);
      // console.log("searched is data is ", chats);
    }
    getData();
  }, []);
  //console.log(searchArray);
  return (
    <div id="main">
      <div className="d-flex">
        <UserSection />
        <ChatSection />
      </div>
    </div>
  );
}

export default Home;
