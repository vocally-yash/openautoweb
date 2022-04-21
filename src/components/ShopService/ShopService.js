import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

import styles from "./ShopService.module.css";
import AutoRepair from "../../assets/img/auto_repair.png";

import Connect from "../../assets/Icons/Connect.png";
import Verify from "../../assets/Icons/Verify.png";
import ServiceProvider from "../../assets/Icons/Service_provider.png";
import Payment from "../../assets/Icons/Flexible_payment.png";

export default function ShopService() {
  return (
    <>
      <Row className={styles.ContentContainer}>
        <Col sm={6}>
          <h1 className={styles.serviceTitle}>
            Become a Service Provider
          </h1>
          <p className={styles.servicedescription}>
            Partner with us, we would love to have your expertise and experience on board with us. Together, we can facilitate
            reliable and convenient services to a larger network of people.
          </p>
            <Col>
              <Image src={Connect} alt="Connect" className={styles.Icon} />
              <h2 className={styles.connectstylesTitle}>Connect with us</h2>
              <p className={styles.connectstylesDescription}>
                Lets meet and discuss the opportunities we can tap through Open
                Auto, for our shared success.
              </p>
              <br />
              <Image src={Verify} alt="Verify" className={styles.Icon} />
              <h2 className={styles.connectstylesTitle}>
                Become a Service Provider
              </h2>
              <p className={styles.connectstylesDescription}>
                We can sign the agreement and lsit you as our service provider,
                so that you start getting orders.
              </p>
            </Col>
            <Col>
              <Image
                src={ServiceProvider}
                alt="ServiceProvider"
                className={styles.Icon}
              />
              <h2 className={styles.connectstylesTitle}>Verify</h2>
              <p className={styles.connectstylesDescription}>
                We can physically visit your auto-repair facility to know more
                about your technicians, processes and services you offer.
              </p>
              <br />
              <Image src={Payment} alt="Payment" className={styles.Icon} />
              <h2 className={styles.connectstylesTitle}>Get Paid</h2>
              <p className={styles.connectstylesDescription}>
                You can accept as many order as you can service and deliver. We
                will ensure a seamless payment experience into your account.
              </p>
            </Col>
        </Col>
        <Col sm={6}>
          <div className={styles.ImageAutoRepair}>
          <Image
            src={AutoRepair}
            alt="autorepair"
            width="540px"
            height="466px"
          />
          </div>
        </Col>
      </Row>
    </>
  );
}
