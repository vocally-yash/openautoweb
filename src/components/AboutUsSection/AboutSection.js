import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "./About.module.css";
import Image from "next/image";

import Banner from "../../assets/img/Bannerabout.png";
import WhyUs from "../../assets/img/Why_us.png";

export default function AboutUsSection() {
  return (
    <>
      <Row className={styles.ContentContainer}>
          <Col>
            <div>
              <div className={styles.aboutTitle}>About Us</div>
              <p className={styles.AboutusSectionInfo}>
                Open Auto is a platform that enables customers to get instant
                access to quality auto repair and maintenance services from the comfort of their
                home. 
                We make it convenient for our customers by providing pick-up of their
                vehicle, getting the  repairs from our reliable service providers, and delivering the
                vehcile back to the customers.
              </p>
              <Button className={styles.headerButtons}>
                <div className={styles.headerButtonText}>Request Service</div>
              </Button>
            </div>
          </Col>
        <Row>
          <div className={styles.BannerSection}>
            <Image
              src={Banner}
              alt="About picture"
              width="1028px"
              height="409px"
            />
          </div>
        </Row>
          <Col sm={5}>
            <Image src={WhyUs} alt="Whyus picture" width="425px" height="378" />
          </Col>
          <Col sm={7}>
            <div className={styles.sectionWhyus}>
              <div className={styles.UsTitle}>Why Us?</div>
              <p className={styles.ContentSectionInfo}>
                We understand that finding a dependable auto repair facility
                near you can be difficult and time-consuming when you face
                uncertain vehicle troubles. Its a tedious job to physically
                deliver your vehicle at the garage, and spend a lot of time
                careless before you can drive it back home. The quality of the
                service may become another concern as you may not always know
                how well-versed the mechanic is.
                <br />
                <br />
                Open Auto is a one-stop solution to all your concerns. Our
                process starts with the pick-up of your vehicle from your
                preferred location. Our experienced and reliable service
                providers will perform the ordered repairs on the vehicle. You
                can even track your order while we deliver it back to you.
              </p>
            </div>
          </Col>
      </Row>
    </>
  );
}
