import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./ShopChoose.module.css";
import Image from "next/image";

import Choose from "../../assets/img/mokup.png";

export default function ShopChoose() {
  return (
    <>
      <Row className={styles.ContentContainer}>
          <Col sm={6}>
            <h1 className={styles.chooseTitle}>Why Choose Us?</h1>
            <p className={styles.chooseDescription}>
              We know you are a realiable auto care facility and have a good
              reputation in market for the quality services you provide. But,
              its also true that you often attract customers in your
              geographical area.
              <br />
              We, at Open Auto allowa customers across the city to access our
              services and get instant assistance. When you partner with us, we
              lsit you as one of our trusted service providers and open the gate
              to a larger network of customers for you. You will get an
              opportunity to facilitate convenient services to more customers
              and generate more sales, while we handle the pick-up and delivery
              of the vehicle.
            </p>
          </Col>
          <Col sm={6}>
            <div className={styles.mockupPicture}>
            <Image src={Choose} alt="Mockup picture" />
            </div>
          </Col>
      </Row>
    </>
  );
}
