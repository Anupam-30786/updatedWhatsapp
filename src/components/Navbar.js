import React, { useContext } from "react";
import "../styles/App.css";
import { ImUser } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Container,
  Form,
  Nav,
  NavDropdown,
  Image,
  Button,
} from "react-bootstrap";

function WhatsAppNavbar() {
  return (
    <>
      <Navbar
        className="airNav"
        bg="light"
        expand="lg"
        style={{ backgroundColor: "#2f2f8d !important" }}
      >
        <Container fluid className="bg-success">
          <Navbar.Brand>
            <Image
              className="opacity-75"
              src="	https://tse1.mm.bing.net/th?id=OIP.D1PUqYHsDKfBnEzvf5FGQwHaCs&pid=Api&P=0
"
              height="50px"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default WhatsAppNavbar;
