import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Offering.module.css";
import Image from "next/image";

import CarPicking from "../../assets/Icons/car_picking_up.png";
import LiveTrack from "../../assets/Icons/Live_Track.png";
import IconsPayment from "../../assets/Icons/Payment.png";
import Drop from "../../assets/Icons/Drop_off.png";

import Ecosystem from "../../assets/img/ecosystem.png";
import Status from "../../assets/img/Status.png";
import Payment from "../../assets/img/Payment.png";
import DropOff from "../../assets/img/drop_off.png";

export default function OurOfferingServiceSection() {
  return (
    <>
      <Row className={styles.ContentContainer}>
        <h1 className={styles.serviceTitle}>Service Offering</h1>
        {/* -----------------------------Section-One--------------------------------- */}
          <Col sm={1} className={styles.caricons}>
            <div>
              <Image src={CarPicking} alt="car picking" />
            </div>
          </Col>
          <Col sm={5} className={styles.steponeLayout}>
            <div>
              <h1 className={styles.steponeTitle}>Pick up</h1>
              <p className={styles.steponeDescription}>
                Once scheduled, our convenience service will showcase a service
                driver coming to pick up your vehicle at a preferred location
                during the scheduled slot. ​
              </p>
            </div>
          </Col>
          <Col>
            <div className={styles.ecosystemImage}>
              <Image src={Ecosystem} alt="ecosystem" />
            </div>
          </Col>

        {/* -------------------------------section two------------------------------ */}
        <Row className={styles.sectionTwo}>
          <Col className={styles.secondSection}>
            <Image src={Status} width="283px" height="242px" alt="status" />
          </Col>
          <Col sm={1}>
            <Image src={LiveTrack} alt="live track" />
          </Col>
          <Col sm={5} className={styles.secondSection}>
            <div>
              <h1 className={styles.steponeTitle}>Status</h1>
              <p className={styles.steponeDescription}>
                After picking up, you will be able to track your vehicle’s
                status, where it is located, and how far in the process of
                maintenance it is. ​
              </p>
            </div>
          </Col>
        </Row>
        {/* --------------------------------section-----three------------------------- */}
        <Row className={styles.sectionThree}>
          <Col sm={1}>
            <Image src={IconsPayment} alt="dropoff" />
          </Col>
          <Col sm={5}>
            <div>
              <h1 className={styles.steponeTitle}>Payment​</h1>
              <p className={styles.steponeDescription}>
                You can pay online using any of our flexible payment options.
              </p>
            </div>
          </Col>
          <Col>
            <Image src={Payment} width="282px" height="315px" alt="payment" />
          </Col>
        </Row>
        {/* -------------------------Section-Four-------------------------- */}
        <Row className={styles.sectionFour}>
          <Col>
            <Image src={DropOff} width="349px" height="296px" alt="dropoff" />
          </Col>
          <Col sm={1}>
            <Image src={Drop} alt="dropoff" />
          </Col>
          <Col sm={5}>
            <div></div>
            <h1 className={styles.steponeTitle}>Drop off</h1>
            <p className={styles.steponeDescription}>
              once the payment is received, we will safely deliver your vehicle
              back to your location
            </p>
          </Col>
        </Row>
      </Row>
    </>
  );
}
