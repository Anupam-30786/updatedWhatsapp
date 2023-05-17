import React, { useContext, useState, useEffect } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import Messages from "./Messages";
import { IoSend } from "react-icons/io5";
import ClickContext from "./Context/ClickContext";
import toast, { Toaster } from "react-hot-toast";

function SearchBar({ Component }) {
  const {
    Profiles,
    setProfiles,
    searchArray,
    setSearchArray,
    currentUser,
    setCurrentUser,
    notification,
    setNotification,
  } = useContext(ClickContext);
  const [searchString, setSearchString] = useState("");
  const [dummyArray, setDummyArray] = useState([]);
  const isTrue = Component.type === Messages;
  var newMessage = "";
  var index = 0;

  const searchUser = (e) => {
    setSearchString(e.target.value);
    if (e.target.value) {
      // console.log();
      const newArray = searchArray.filter((user) => {
        // console.log("String is", searchString);
        return user.name
          .toLowerCase()
          .includes(e.target.value.toLocaleLowerCase());
      });
      //console.log("new array is", newArray);
      setSearchArray(newArray);
    } else setSearchArray(Profiles);
  };

  const setObject = () => {
    if (!newMessage) {
      toast.error("Tesxt feild is empty");
    } else {
      
      let dummy = { ...currentUser };
      console.log("dummy is", dummy);
      const obj = {
        message: newMessage,
        from: "me",
      };
      dummy.messages.push(obj);
      setCurrentUser(JSON.parse(JSON.stringify(dummy)));
      //  console.log("cu", currentUser);
      Profiles.map((profile, i) => {
        if (profile.name === currentUser.name) {
          index = i;
          return;
        }
      });
      Profiles[index] = JSON.parse(JSON.stringify(currentUser));
      localStorage.setItem("data", JSON.stringify(Profiles));
      setSearchArray(Profiles);
      setNotification(notification + 1);
      document.getElementById("input").value = "";
    }
  };

  return (
    <>
      {!isTrue ? (
        <div className="d-flex align-items-lg-center">
          <InputGroup size="sm" className="m-3">
            <InputGroup.Text id="inputGroup-sizing-sm" placeholder="hello">
              {<AiOutlineSearch />}
            </InputGroup.Text>

            <Form.Control
              value={searchString}
              placeholder="Type to search chat"
              aria-label="small"
              aria-describedby="inputGroup-sizing-sm"
              onChange={searchUser}
            />
          </InputGroup>
          <span className="m-2">
            <BsFilter size={20} />
          </span>
        </div>
      ) : (
        <div className="bg-dark d-flex" style={{ positio: "sticky" }}>
          <div className="bg-dark d-flex fixed-bottom ms-auto w-75">
            <InputGroup className="mb-3">
              <Form.Control
                id="input"
                placeholder="type message"
                onChange={(e) => {
                  newMessage = e.target.value;
                }}
              />
              <InputGroup.Text>
                <IoSend onClick={setObject} disabled />
              </InputGroup.Text>
            </InputGroup>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchBar;
