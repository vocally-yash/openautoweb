import React from "react";
import Container from "react-bootstrap/Container";
import ShopHeaderContent from "../components/ShopHeaderContent/ShopHeaderContent";
import ShopService from "../components/ShopService/ShopService";
import ShopChoose from "../components/ShopChoose/ShopChoose";
import Shopprocess from "../components/ShopProcess/Shopprocess";
import ShopConnect from "../components/ShopConnect/ShopConnect";
import ShopUsers from "../components/ShopUsers/ShopUsers";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Shops() {
  return (
    <div id="shops">
      <div>
      <div style={{backgroundColor: "#161B25", maxWidth: '100%'}}>
          <Container>
            <Header />
          </Container>
        </div>
        <div style={{backgroundColor: "#161B25", maxWidth: '100%'}}>
          <Container>
            <ShopHeaderContent />
          </Container>
        </div>
        <div style={{ backgroundColor: "#0A0E14", maxWidth: '100%' }}>
          <Container>
            <ShopService />
          </Container>
        </div>
        <div style={{ backgroundColor: "#0C1017", maxWidth: '100%' }}>
          <Container>
            <ShopChoose />
          </Container>
        </div>
        <div style={{ backgroundColor: "#0A0E14", maxWidth: '100%' }}>
          <Container>
            <Shopprocess />
          </Container>
        </div>
        <div style={{ backgroundColor: "#080B10", maxWidth: '100%' }}>
          <Container>
            <ShopUsers/>
          </Container>
        </div>
        <div style={{ backgroundColor: "#0C1017", maxWidth: '100%' }}>
          <Container>
            <ShopConnect />
          </Container>
        </div>
        <div style={{ backgroundColor: "#0A0D14", maxWidth: '100%' }}>
          <Container>
            <Footer />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Shops;
