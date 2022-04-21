import React from "react";
import Container from "react-bootstrap/Container";
import ContactHeader from "../components/ContactHeader/ContactHeader";
import ContactTouch from "../components/ContactTouch/ContactTouch";
import Downloads from "../components/Downloads/Downloads";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function ContactUs() {
  return (
    <div id="contact">
      <div>
        <div style={{ backgroundColor: "#161B25",  maxWidth: '100%' }}>
          <Container>
            <Header />
          </Container>
        </div>
        <div style={{ backgroundColor: "#161B25",  maxWidth: '100%' }}>
          <Container>
            <ContactHeader />
          </Container>
        </div>
        <div style={{ backgroundColor: "#0C1017",  maxWidth: '100%' }}>
          <Container>
            <ContactTouch />
          </Container>
        </div>
        <div style={{ backgroundColor: "#161B25",  maxWidth: '100%'}}>
          <Container>
            <Downloads />
          </Container>
        </div>
        <div style={{ backgroundColor: "#030405",  maxWidth: '100%' }}>
          <Container>
            <Footer />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
