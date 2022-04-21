import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

import styles from "./OpenAutoContent.module.css";

import CarBuidling from "../../assets/img/car_building.png";
import TimeSaving from "../../assets/img/time_saving.png";

import Intelligent from "../../assets/Icons/intelligent.png";
import Fastest from "../../assets/Icons/fastestimprovign.png";
import App from "../../assets/Icons/app.png";
import Track from "../../assets/Icons/track.png";

export default function OpenAutoContent() {
  return (
    <>
      <Row className={styles.ContentContainer}>
        <Col sm={8}>
          <div>
            <h1 className={styles.title}>ABOUT US</h1>
            <h1 className={styles.subTitle}>Open Auto</h1>
            <p className={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </div>
        </Col>
        <Col sm={4}>
          <Row>
            <Col>
              <h1 className={styles.contentTitle}>
                <span>
                  <Image src={Intelligent} alt="intelligent" width="34px" />
                </span>{" "}
                Intelligent Optimization
              </h1>
              <p className={styles.contentDescription}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={styles.optiontwo}>
                <h1 className={styles.contentTitle}>
                  <span>
                    <Image src={Fastest} alt="fastest" width="34px" />
                  </span>{" "}
                  Fastest Improving Platform
                </h1>
                <p className={styles.contentDescription}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm={8}>
          <div className={styles.BuildingImage}>
            <Image src={CarBuidling} alt="car building pic" />
          </div>
        </Col>
        <Col sm={2}></Col>
        <div className={styles.Text}>
          <h1 className={styles.FocusedTitle}>Focused on Time Saving</h1>
          <p className={styles.focuseddescription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industrys standard dummy text ever
            since the 1500s,
          </p>
        </div>
        <Col sm={6}>
          <Col>
            <div className={styles.savingOneOption}>
              <h1 className={styles.contentTitle}>
                <span className={styles.icons}>
                  <Image src={App} alt="app icons" width="34px" />
                </span>{" "}
                Start with OpenAuto App
              </h1>
              <p className={styles.contentDescription}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
            </div>
          </Col>
          <Col sm={2}></Col>
          <Col>
            <div className={styles.savingOneOption}>
              <h1 className={styles.contentTitle}>
                <span>
                  <Image src={Track} alt="track icons" width="34px" />
                </span>{" "}
                Start with OpenAuto App
              </h1>
              <p className={styles.contentDescription}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
            </div>
          </Col>
        </Col>
        <Col sm={6}>
          <Image
            src={TimeSaving}
            width="751px"
            height="450px"
            alt="time saving pic"
          />
        </Col>
      </Row>
    </>
  );
}
