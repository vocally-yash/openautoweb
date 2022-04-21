import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import Image from "next/image";

import OpenAutoLogo from "../../assets/Logo/LogoSVG.svg";
import styles from "./OpenAuto.module.css";


export default function OpenAuto() {
  return (
    <>
      <Row className={styles.ContentContainer}>
          <Col sm={7}>
            <div>
              <h1 className={styles.title}>Open Auto</h1>
              <h1 className={styles.subTitle}>
                We are Making things
                <br /> Easier for You
              </h1>
            </div>
          </Col>
          <Col sm={5}>
            <div>
              <h4 className={styles.serviceTitle}>Request a Service</h4>
              <div className={styles.cardBody}>
                {/* Pending */}
                <Card className={styles.cardContent}>
                  <Card.Body>
                    <Link href="#">
                      <a className={styles.addressLink}>+ Add Address</a>
                    </Link>
                    <Form>
                      <Form.Group className="mb-3" controlId="formCalander">
                        <Form.Label className={styles.ServicedatetimeLabels}>
                          Select your Preferred Date & Time
                        </Form.Label>
                        <Form.Control
                          type="selectdatetime"
                          placeholder="select date"
                          styles={{ borderRadius: "25px" }}
                          style={{
                            color: "white",
                            background: "#2D3442",
                            width: "100%",
                            borderRadius: "22px",
                            marginBottom: "1.5rem",
                            border: "1px solid #B5B8B9",
                            height: "44px",
                          }}
                        />
                      </Form.Group>
                      <Link href="#">
                        <a className={styles.vehicleLink}>+ Add Vehicle</a>
                      </Link>
                      <Form.Group className="mb-3" controlId="serviceInput">
                        <Form.Label className={styles.ServiceLabels}>
                          Select Services
                        </Form.Label>
                        <Form.Control
                          type="services"
                          placeholder="choose services"
                          style={{
                            color: "white",
                            background: "#2D3442",
                            width: "100%",
                            borderRadius: "22px",
                            border: "1px solid #B5B8B9",
                            height: "44px",
                          }}
                        />
                      </Form.Group>
                      <Button className={styles.headerButtons}>
                        <div className={styles.headerButtonText}>
                          Request Service
                        </div>
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>
        <Row sm={6}>
            <div className={styles.heroImage}>
            <Image
              src={OpenAutoLogo}
              alt="logo"
              width="38px"
              height="38px"
            />
            </div>
        </Row>
      </Row>
    </>
  );
}
