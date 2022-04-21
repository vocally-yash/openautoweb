import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./CompanyInfo.module.css";
import Image from "next/image";

import Integrity from "../../assets/Icons/intergrity.png";
import RangeService from "../../assets/Icons/Range_Service.png";
import Service from "../../assets/Icons/Service.png";

export default function CompnayInfoSection() {
  return (
    <>
      <Row className={styles.ContentContainer}>
          <div>
            <div className={styles.aboutTitle}>Company Info</div>
            <p className={styles.AboutusSectionInfo}>
              Open Auto was founded in 2021 with a vision to make auto repair
              and maintenance accessible <br />
              to customers at the convenience of their homes. Vehicle repairs
              are uncertain and finding a reliable <br />
              garage can be frustrating and a time-consuming process, especially
              when you are in a rush. <br />
              We bridge this gap by providing a platform to get automotive
              repair and maintenance services at <br />
              the comfort of your doorstep.
            </p>
          </div>
          <Col sm={4}>
            <h1 className={styles.aboutServiceTitle}>
              <span><Image src={Service} width={28} height={28} alt="Service" /></span>{"" }
              Whos giving the Service
            </h1>
            <p className={styles.AboutusSerivceInfo}>
              Each order placed by a customer is directed to one of our service
              providers and customers can track their order on our mobile app.
            </p>
          </Col>
          <Col sm={4}>
            <h1 className={styles.aboutServiceTitle}>
              <span><Image src={Integrity} width={28} height={28} alt="Integrity" /></span>{" "}Acting the Integrity</h1>
            <p className={styles.AboutusSerivceInfo}>
              We allow our customers to gain visibility into the process while
              giving them assurance of the quality of our services through
              warranties, and prompt customer support.
            </p>
          </Col>

          <Col sm={4}>
            <h1 className={styles.aboutServiceTitle}>
              <span><Image
              src={RangeService}
              width={28}
              height={28}
              alt="Range Service"
            /></span>{" "}Range of Services</h1>
            <p className={styles.AboutusSerivceInfo}>
              We offer a wide range of services on our mobile app; from vehicle
              repairs to periodic maintenance, we serve customers everything
              they need.
            </p>
          </Col>
        </Row>
    </>
  );
}
