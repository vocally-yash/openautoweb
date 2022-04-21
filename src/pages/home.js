import React from "react";
import Container from "react-bootstrap/Container";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Downloads from "../components/Downloads/Downloads";


function HomePage(){
    return(
        <div id="home">
            <div>
                <div style={{backgroundColor: "#161B25",  maxWidth: '100%'}}>
                    <Container>
                        <Header  />
                    </Container>
                </div>
                <div style={{backgroundColor: "#161B25",  maxWidth: '100%'}}>
                    <Container>
                        <Hero  />
                    </Container>
                </div>
                <div style={{backgroundColor: "#161B25",  maxWidth: '100%'}}>
                    <Container>
                        <About  />
                    </Container>
                </div>
                <div style={{backgroundColor: "#161B25",  maxWidth: '100%'}}>
                    <Container>
                        <Downloads  />
                    </Container>
                </div>  
                <div style={{backgroundColor: "#0A0D14",  maxWidth: '100%'}}>
                    <Container>
                        <Footer  />
                    </Container>
                </div>  
            </div>
        </div>
    )
}

export default HomePage;