import Header from "../components/Header/Header";
import Privacy from "../components/Privacy/Privacy";
import Footer from "../components/Footer/Footer";
import Container from "react-bootstrap/Container";

export default function privacyPolicyPage() {
  return (
    <>
      <div>
        <div style={{ backgroundColor: "#0c1017", maxWidth: "100%" }}>
          <Container>
            <Header />
          </Container>
        </div>
        <Privacy />
        <div style={{ backgroundColor: "#161B25", maxWidth: "100%" }}>
          <Container>
            <Footer />
          </Container>
        </div>
      </div>
    </>
  );
}
