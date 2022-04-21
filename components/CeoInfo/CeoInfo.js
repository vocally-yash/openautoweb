import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Ceoinfo.module.css";
import Image from "next/image";

import Souren from "../../assets/img/Souren.png";
import Quote from "../../assets/Icons/Qote.png";

export default function CeoInfoSection() {
  return (
    <>
      <Row className={styles.ContentContainer}>
          <Col sm={7}>
            <div>
              <div className={styles.ceotitle}>A Quote from our CEO</div>
              <br />
              <Col>
                <Image src={Quote} alt="Quote"></Image>
              </Col>
              <Col>
                <p className={styles.ceodescription}>
                  We have been running multiple private automotive repair shops
                  and have noticed a growing interest in modernizing the
                  relationship between the shops and the customers. When we
                  present the courtesy of picking up and dropping off the
                  vehicle, our customers loved the idea!
                </p>
              </Col>
            </div>
          </Col>
          <Col sm={4}>
            <div>
              <Image
                src={Souren}
                alt="CEO"
                width="367px"
                height="339px"
                quality={100}
              />
            </div>
          </Col>
        </Row>
    </>
  );
}
