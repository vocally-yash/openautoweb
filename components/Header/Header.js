import { Container, Navbar, Nav, Button, Dropdown } from "react-bootstrap";
import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [loginShow, setLoginShow] = useState(false);
  const [signupShow, setSignupShow] = useState(false);
  const [dropdownShow, setDropDownShow] = useState(false);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className={styles.ContentContainer}
      >
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="/images/Logo.svg"
              width="203px"
              height="30px"
              alt="openauto logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className={styles.navLinkCenter}>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" as="p" >
                  <Nav.Link className={styles.navLink} href="/about" onMouseOver={() => setDropDownShow(true)}>About Us</Nav.Link>
                </Dropdown.Toggle>

                <Dropdown.Menu show={dropdownShow} style={{ background: 'transparent', border: '0px', color: 'white', margin: '0px', paddingTop: '0px' }}>
                  <Dropdown.Item href="/shop" className={styles.dropDownMenu}>Shops</Dropdown.Item>
                  <Dropdown.Item href="/contact" className={styles.dropDownMenu}>Contact Us</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link
                href="/offering"
                className={styles.navLink}
              >
                Our Offering
              </Nav.Link>
              <Nav.Link
                href="#"
                className={styles.navLink}
                onClick={() => setLoginShow(true)}
              >
                <Button
                  variant="outline-light"
                  className={styles.headerButtons}
                >
                  Log In{" "}
                  <FontAwesomeIcon
                    icon={faArrowRightToBracket}
                    className={styles.arrowIcon}
                  />
                </Button>
              </Nav.Link>
              <Signin show={loginShow} onHide={() => setLoginShow(false)} />
              <Nav.Link
                href="#"
                className={styles.navLink}
                onClick={() => setSignupShow(true)}
              >
                Sign Up{" "}
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className={styles.penSquare}
                />
              </Nav.Link>
              <Signup show={signupShow} onHide={() => setSignupShow(false)} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
