import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "./Offering.module.css";
import Image from "next/image";

import Banner from "../../assets/img/Banner_Our_Offering.png";

import Google from "../../assets/Icons/Playstore.png";
import Apple from "../../assets/Icons/Apple.png";

export default function OurOfferingSection() {
  return (
    <>
      <Row className={styles.ContentContainer}>
        <Col sm={7}>
          <h1 className={styles.Title}>Open Auto PicK-Up Service</h1>
          <p className={styles.paragraphDescription}>
            We want to offer you the most comfortable experience when you choose
            Open Auto.
            <br /> We pick-up your vehicle from your preferred location, get it
            repaired at one of our
            <br /> auto-repair facilities, and deliver it back to you
          </p>
          <h1 className={styles.subTitle}>Download the OpenSuto App</h1>
          <p className={styles.paragraphDescription}>
            Open Auto enables you to book your vehicle repairs or maintenance
            schedules through
            <br /> the app and be ale to track the progress on your phone.
          </p>
          <div className={styles.donwloadBtn}>
            <Button className={styles.headerButtons}>
              <Row xs="auto">
                <Col>
                  <Image src={Google} alt="Google"></Image>
                </Col>
                <Col>
                  <p className={styles.getitOn}>Get it on</p>
                  <div className={styles.headerButtonText}>Google Play</div>
                </Col>
              </Row>
            </Button>
            <Button className={styles.headerAppleButtons}>
              <Row xs="auto">
                <Col>
                  <Image src={Apple} alt="Apple"></Image>
                </Col>
                <Col>
                  <p className={styles.getitOn}>Download on the</p>
                  <div className={styles.headerButtonText}>Apple Store</div>
                </Col>
              </Row>
            </Button>
          </div>
        </Col>
        <Col sm={5}>
          <Image src={Banner} alt="Banner" width="557px" height="540px"></Image>
        </Col>
      </Row>
    </>
  );
}
