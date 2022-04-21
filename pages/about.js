import React from "react";
import Container from "react-bootstrap/Container";
import AboutUsSection from "../components/AboutUsSection/AboutSection";
import CeoInfo from "../components/CeoInfo/CeoInfo";
import CompanyInfo from "../components/CompanyInfo/CompanyInfo";
import Downloads from "../components/Downloads/Downloads";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function About() {
  return (
    <div id="about">
      <div>
        <div style={{ backgroundColor: "#0c1017", maxWidth: "100%" }}>
          <Container>
            <Header />
          </Container>
        </div>
        <div style={{ backgroundColor: "#0c1017", maxWidth: "100%" }}>
          <Container>
            <AboutUsSection />
          </Container>
        </div>
        <div style={{ backgroundColor: "#161B25", maxWidth: "100%" }}>
          <Container>
            <CeoInfo />
          </Container>
        </div>
        <div style={{ backgroundColor: "#0c1017", maxWidth: "100%" }}>
          <Container>
            <CompanyInfo />
          </Container>
        </div>
        <div style={{ backgroundColor: "#161B25", maxWidth: "100%" }}>
          <Container>
            <Downloads />
          </Container>
        </div>
        <div style={{ backgroundColor: "#0A0D14", maxWidth: "100%" }}>
          <Container>
            <Footer />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default About;
