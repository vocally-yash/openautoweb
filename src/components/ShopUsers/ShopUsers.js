import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Container from "react-bootstrap/Container";

import styles from "./ShopUsers.module.css";

import Customer from "../../assets/Icons/Customer.png";
import Shops from "../../assets/Icons/Shps.png";
import DropOff from "../../assets/Icons/Dropoff.png";
import Requests from "../../assets/Icons/Requests.png";

export default function ShopUsers() {
  return (
    <>
      <Row className={styles.ContentContainer}>
        <Container>
          <Row sm={12}>
            <Col>
              <div className={styles.Icons}>
                <Image src={Customer} alt="Customer" className={styles.Icon} />
              </div>
              <h1 className={styles.numberlist}>300,000+</h1>
              <h2 className={styles.icons}>Customers</h2>
            </Col>
            <Col>
              <div className={styles.Icons}>
                <Image src={Shops} alt="Shops" className={styles.Icon} />
              </div>
              <h1 className={styles.numberlist}>100+</h1>
              <h2 className={styles.icons}>Shops</h2>
            </Col>
            <Col>
              <div className={styles.Icons}>
                <Image src={DropOff} alt="DropOff" className={styles.Icon} />
              </div>
              <h1 className={styles.numberlist}>450,000+</h1>
              <h2 className={styles.icons}>Drop off</h2>
            </Col>
            <Col>
              <div className={styles.Icons}>
                <Image src={Requests} alt="Requests" className={styles.Icon} />
              </div>
              <h1 className={styles.numberlist}>1,000,000+</h1>
              <h2 className={styles.icons}>Requests</h2>
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  );
}
