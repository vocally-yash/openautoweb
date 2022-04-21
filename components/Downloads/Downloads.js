import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Button from "react-bootstrap/Button";

import downloads from "../../assets/img/Mobile.png";
import Google from "../../assets/Icons/Playstore.png";
import Apple from "../../assets/Icons/Apple.png";

import styles from "./Downloads.module.css";

export default function Download() {
  return (
    <>
      <Row className={styles.ContentContainer}>
        <Col sm={5}>
          <div className={styles.imagePic}>
            <Image
              src={downloads}
              alt="Downalod picture"
              width="423px"
              height="623px"
              quality={100}
            />
          </div>
        </Col>
        <Col sm={7}>
          <div className={styles.appSection}>
            <h6 className={styles.apptitle}>APP</h6>
            <div className={styles.downloadtitle}>Download Our Mobile App</div>
            <br />
            <p className={styles.description}>
              Find the best auto services on our mobile app and enjoys seamless
              experience on Open Auto
            </p>
            <div className={styles.donwloadBtn}>
              <Button className={styles.headerButtons}>
                <Row xs="auto">
                  <Col>
                    <Image
                      src={Google}
                      alt="Google"
                      width="20px"
                      height="21px"
                      quality={100}
                    ></Image>
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
                    <Col>
                      <Image
                        src={Apple}
                        width="20px"
                        height="21px"
                        alt="Apple"
                        quality={100}
                      ></Image>
                    </Col>
                  </Col>
                  <Col>
                    <p className={styles.getitOn}>Download on the</p>
                    <div className={styles.headerButtonText}>Apple Store</div>
                  </Col>
                </Row>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
