import React from "react";
import ChatUser from "./ChatUser";
import SearchBar from "./SearchBar";
import TopIcon from "./TopIcon";

function UserSection() {
  return (
    <div className="col-md-3 ">
      <TopIcon />
      <SearchBar Component={<UserSection />} />
      <ChatUser />
    </div>
  );
}
export default UserSection;
