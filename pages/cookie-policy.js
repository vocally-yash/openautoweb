import Header from "../components/Header/Header";
import Cookies from "../components/Cookies/Cookies";
import Footer from "../components/Footer/Footer";
import Container from "react-bootstrap/Container";

export default function cookiePage(){
    return(
        <>
        <div>
            <div style={{backgroundColor: "#0c1017", maxWidth: "100%"}}>
                <Container>
                    <Header />
                </Container>
            </div>
            <Cookies/>
            <div style={{ backgroundColor: "#0c1017", maxWidth: "100%" }}>
                <Container>
                <Footer/>
                </Container>
            </div>
        </div>
        </>
    )
}