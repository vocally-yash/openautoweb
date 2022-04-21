import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

import styles from "./OpenAutoOffer.module.css";
import Ecosystem from "../../assets/img/ecosystem.png";

import CarPickingup from "../../assets/Icons/car_picking_up.png";
import Discount from "../../assets/Icons/Discount.png";
import Payment from "../../assets/Icons/Payment.png";
import LiveTracking from "../../assets/Icons/Live_Track.png";

export default function OpenAutoOffer() {
  return (
    <>
      <Row className={styles.ContentContainer}>
        <Row>
          <Col sm={8}>
            <div>
              <h3 className={styles.title}>our offering</h3>
              <h1 className={styles.headingTitle}>Open Autos Technology</h1>
              <p className={styles.description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s,
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <div className={styles.ecosystemPic}>
              <Image
                src={Ecosystem}
                width="617px"
                height="301px"
                alt="ecosystem pic"
              />
            </div>
          </Col>
          <Col sm={8}>
            <Row>
              <Col sm={2}>
                <div className={styles.icons}>
                  <Image src={CarPickingup} alt="car picking up" width="34px" />
                </div>
              </Col>
              <Col>
                <div className={styles.offerGroup}>
                  <h3 className={styles.offerTitle}>Car Picking up</h3>
                  <p className={styles.offerDescription}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </p>
                </div>
              </Col>
              <Col sm={2}>
                <div className={styles.icons}>
                  <Image src={Discount} alt="car picking up" width="34px" />
                </div>
              </Col>
              <Col>
                <div className={styles.offerGroup}>
                  <h3 className={styles.offerTitle}>Discounts</h3>
                  <p className={styles.offerDescription}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                <div className={styles.icons}>
                  <Image src={Payment} alt="car picking up" width="34px" />
                </div>
              </Col>
              <Col>
                <div className={styles.offerGroup}>
                  <h3 className={styles.offerTitle}>Payment Slice</h3>
                  <p className={styles.offerDescription}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </p>
                </div>
              </Col>
              <Col sm={2}>
                <div className={styles.icons}>
                  <Image src={LiveTracking} alt="car picking up" width="34px" />
                </div>
              </Col>
              <Col>
                <div className={styles.offerGroup}>
                  <h3 className={styles.offerTitle}>Live Tracking</h3>
                  <p className={styles.offerDescription}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </>
  );
}
