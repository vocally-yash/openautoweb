import Header from "../components/Header/Header"
import Terms from "../components/Terms/Terms"
import Footer from "../components/Footer/Footer"
import Container from "react-bootstrap/Container"

export default function termPage(){
    return(
        <>
        <div>
            <div style={{ backgroundColor: "#0c1017", maxWidth: "100%" }}>
                <Container>
                    <Header />
                </Container>
            </div>
            <Terms/>
            <div style={{backgroundColor: "#0c1017", maxWidth: "100%"}}>
                <Container>
                    <Footer/>
                </Container>
            </div>
        </div>
        </>
    )
}