import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./Footer.module.css";

import OpenAutoLogo from "../../assets/Logo/OpenAuto_Logo_White.png";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <Row className={styles.ContentContainer}>
        <Container>
          <Row>
            <span style={{ display: "inline-flex", paddingBottom: "1rem" }}>
              <div className={styles.OpenAutoImage}>
                <Image src={OpenAutoLogo} alt="Logo" />
              </div>
            </span>
            <Col md={6} sm={6}>
              <div>
                <h2 className={styles.abouttitle}>About</h2>
                <p className={styles.aboutdescription}>
                  Open Auto provides complete auto care solutions to its
                  customers along pick-up and delivery of their vehicle.
                </p>
              </div>
              <div className={styles.socialMenu}>
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className={styles.icons}
                    size="2x"
                  />
                </a>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className={styles.icons}
                    size="2x"
                  />
                </a>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={styles.icons}
                    size="2x"
                  />
                </a>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className={styles.icons}
                    size="2x"
                  />
                </a>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <h2 className={styles.mainLinks}>Main Links</h2>
              <div className={styles.footerContainer}>
                <Link href="/">
                  <p className={styles.home}>Home</p>
                </Link>
                <Link href="/about">
                  <p className={styles.aboutus}>About Us</p>
                </Link>
                <Link href="/offering">
                  <p className={styles.ouroffering}>Our Offering</p>
                </Link>
                <Link href="/contact">
                  <p className={styles.contact}>Contact</p>
                </Link>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className={styles.contactLink}>Contact</div>
              <div className={styles.phonenumber}>
                <FontAwesomeIcon icon={faPhone} /> &nbsp;&nbsp;+769 586 4558
              </div>
              <h3 className={styles.subphonenumber}>
                &nbsp;&nbsp;+769 586 4558
              </h3>
              <p className={styles.emailid}>
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                &nbsp;&nbsp;service@openauto.ca
              </p>
              <div className={styles.address}>
                <FontAwesomeIcon icon={faLocationDot} /> &nbsp;&nbsp;OpenAuto,
                Vancouver
                <div className={styles.address}>
                  {" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;British Columbia, Canada
                </div>
              </div>
            </Col>
          </Row>
          <hr className={styles.divideLine} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>
              <p className={styles.copyright}>
                Open Auto @ all rights reserved. {new Date().getFullYear()}
              </p>
            </span>
            <span style={{ display: "flex" }}>
              <Link href="/privacy-policy" style={{ textDecoration: "none" }}>
                <p className={styles.copyright}>Privacy policy</p>
              </Link>
              <Link
                href="/terms-and-condition"
                style={{ textDecoration: "none" }}
              >
                <p className={styles.copypolicy}>Terms of use</p>
              </Link>
              <Link href="/cookie-policy" style={{ textDecoration: "none" }}>
                <p className={styles.copypolicy}>Cookie policy</p>
              </Link>
            </span>
          </div>
        </Container>
      </Row>
    </>
  );
}
