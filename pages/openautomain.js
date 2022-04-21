import React from "react";
import Container from "react-bootstrap/Container";
import OpenAuto from "../components/OpenAuto/OpenAuto";
import OpenAutoContent from "../components/OpenAutoContent/OpenAutoContent";
import OpenAutoOffer from "../components/OpenAutoOffer/OpenAutoOffer";
import Download from "../components/Downloads/Downloads";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


function OpenAutoSection() {
  return (
    <div id="open-auto">
      <div>
        <div style={{ backgroundColor: "#161B25",  maxWidth: '100%' }}>
          <Container>
            <Header />
          </Container>
        </div>
        <div style={{ backgroundColor: "#0C1017",  maxWidth: '100%' }}>
          <Container>
            <OpenAuto />
          </Container>
        </div>
        <div style={{ backgroundColor: "#0C1017",  maxWidth: '100%' }}>
          <Container>
            <OpenAutoContent />
          </Container>
        </div>
        <div style={{ backgroundColor: "#0C1017",  maxWidth: '100%' }}>
          <Container>
            <OpenAutoOffer />
          </Container>
        </div>
        <div style={{ backgroundColor: "#0C1017", maxWidth: '100%' }}>
          <Container>
            <Download />
          </Container>
        </div>
        <div style={{ backgroundColor: "#0A0D14",  maxWidth: '100%' }}>
          <Container>
            <Footer />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default OpenAutoSection;
