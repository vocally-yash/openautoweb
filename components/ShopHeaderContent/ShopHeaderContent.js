import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "./ShopHeader.module.css";
import Image from "next/image";

import Connect from "../../assets/img/Connect_with_us.png";
import OpenAuto from "../../assets/Logo/LogoSVG.svg";

export default function ShopHeaderContent() {
  return (
    <>
      <Row className={styles.ContentContainer}>
          <Col sm={4}>
            <h1 className={styles.connectTitle}>Connect with</h1>
            <h1 className={styles.OpenTitle}>Open Auto</h1>
            <p className={styles.OpenDescription}>
              Interested to join our trusted network of service providers? Join
              us in providing reliable auto care and quality assistance to our
              valued customers.
            </p>
            <Button className={styles.headerButtons}>
              <div className={styles.headerButtonText}>Connect Us</div>
            </Button>
          </Col>
          <Col sm={8}>
            <Image
              src={Connect}
              height="598rem"
              width="885px"
              alt="Connect picture"
            />
          </Col>
          <Col sm={6}>
            <div className={styles.heroImage}>
            <Image
              src={OpenAuto}
              height="38px"
              width="38px"
              alt="logo"
            />
            </div>
          </Col>
      </Row>
    </>
  );
}
