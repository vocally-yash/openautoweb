import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./ContactHeader.module.css";
import Image from "next/image";

import GetTouch from "../../assets/img/Get_in_touch.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";


export default function ContactHeader() {
  return (
    <>
      <Row className={styles.ContentContainer}>
          <Col sm={7}>
            <div className={styles.ContactHeader}>
            <h1 className={styles.connectTitle}>We’re all ears!</h1>
            <p className={styles.connectDescription}>
              If you have trouble managing your order, or want to talk to one of
              our expert technicians, we are here for you!
            </p>
            </div>
            <Row>
              <div className={styles.socialMenu}>
                  <a href="#"><FontAwesomeIcon icon={faYoutube} className={styles.icons} size="2x"/></a>
                  <a href="#"><FontAwesomeIcon icon={faFacebook} className={styles.icons} size="2x"/></a>
                  <a href="#"><FontAwesomeIcon icon={faTwitter} className={styles.icons} size="2x"/></a>
                  <a href="#"><FontAwesomeIcon icon={faInstagram} className={styles.icons} size="2x"/></a>
                  <a href="#"><FontAwesomeIcon icon={faLinkedin} className={styles.icons} size="2x"/></a>
              </div>
            </Row>
          </Col>
          <Col sm={5}>
            <div className={styles.getTo}>
            <Image
              src={GetTouch}
              width="397px"
              height="381px"
              alt="Get in touch"
            />
            </div>
          </Col>
      </Row>
    </>
  );
}
