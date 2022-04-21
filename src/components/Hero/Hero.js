import styles from "./Hero.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";

import Openauto from "../../assets/Logo/LogoSVG.svg";
import BannerHome from "../../assets/img/Banner_home.png";

export default function Hero() {
  return (
    <>        <Container>
          <Row className={styles.ContentContainer}>
            <Row className="d-flex align-items-center">
              <Col sm={6}>
                <h2 className={styles.subTitle}>Open Auto</h2>
                <h1 className={styles.title}>
                  We Offer Smart Auto Care for Your Convenience
                </h1>
                <p>
                  Get professional repair &amp; maintenance services from our
                  expert mechanics, with hassle-free pick-up &amp; delivery of
                  your vehicle at your doorstep
                </p>
                <Button
                  variant="outline-light"
                  className={styles.headerButtons}
                >
                  Request a Service
                </Button>{" "}
              </Col>
              <Col sm={6}>
                <div className={styles.bannerImage}>
                  <Image src={BannerHome} alt="banner_image"  />
                </div>
              </Col>
            </Row>
            <Row className="d-flex align-items">
              <Col sm={6}>
                <div className={styles.heroImage}>
                  <Image src={Openauto} alt="logo" />
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
    </>
  );
}
