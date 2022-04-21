import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./Shopprocess.module.css";

export default function Shopprocess() {
  return (
    <>
      <Row className={styles.ContentContainer}>
        <Row>
          <h1 className={styles.WorkTitle}>Our Work Process</h1>
        </Row>
        <Col sm={3}>
          <div>
            <h3 className={styles.subtitle}>Accept the request</h3>
            <p className={styles.subdescription}>
              You can get started by accepting the order request placed by
              customers on the platform.
            </p>
          </div>
        </Col>
        <Col sm={3}>
          <div>
            <h3 className={styles.subtitle}>Get the Vehicle</h3>
            <p className={styles.subdescription}>
              The vehicle will be picked-up from the customer’s location and
              will be checked-in at your repair facility.
            </p>
          </div>
        </Col>
        <Col sm={3}>
          <div>
            <h3 className={styles.subtitle}>Get it Repaired</h3>
            <p className={styles.subdescription}>
              Check what services have been ordered by the customer and get your
              team started on it
            </p>
          </div>
        </Col>
        <Col sm={3}>
          <div>
            <h3 className={styles.subtitle}>Return the Vehicle</h3>
            <p className={styles.subdescription}>
              Once the payment is received from the customer, the vehicle will
              be picked up from your facility and delivered back to the customer
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}
