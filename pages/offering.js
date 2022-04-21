import React from "react";
import Container from "react-bootstrap/Container";
import Offering from "../components/Offering/Offering";
import OfferingReward from "../components/OfferingReward/OfferingReward";
import OfferingServices from "../components/OfferingServices/OfferingServices";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


function OfferingPage(){
    return(
        <div id="contact">
            <div>
                <div style={{backgroundColor: "#161B25",  maxWidth: '100%'}}>
                    <Container>
                        <Header  />
                    </Container>
                </div>
                <div style={{backgroundColor: "#161B25",  maxWidth: '100%'}}>
                    <Container>
                        <Offering  />
                    </Container>
                </div>
                <div style={{backgroundColor: "#0c1017",  maxWidth: '100%'}}>
                    <Container>
                        <OfferingServices />
                    </Container>
                </div>
                <div style={{backgroundColor: "#0C1017",  maxWidth: '100%'}}>
                    <Container>
                    <OfferingReward />
                    </Container>
                </div>
                <div style={{backgroundColor: "#0C1014",  maxWidth: '100%'}}>
                    <Container>
                    <Footer />
                    </Container>
                </div>
            </div>
        </div>
    )
}


export default OfferingPage;