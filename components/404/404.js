import Link from 'next/link';
import Header from "../Header/Header";
import Container from "react-bootstrap/Container";
import Footer from "../Footer/Footer";
import styles from "./404.module.css";

const ErrorPage = () => {
  return (
    <>
      <div id="not found">
      <div style={{ backgroundColor: "#0c1017", maxWidth: "100%" }}>
          <Container>
            <Header />
          </Container>
        </div>
        <div className={styles.Container}>
          <div className="notfound">
            <h1 className={styles.title}>404</h1>
          </div>
          <h2 className={styles.title}>We are sorry, Page not Found!</h2>
          <Link href="/"><a  className={styles.BacktoLink}>Back to Home Page</a></Link>
        </div>
        <div style={{ backgroundColor: "#161B25", maxWidth: "100%" }}>
          <Container>
            <Footer />
          </Container>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
