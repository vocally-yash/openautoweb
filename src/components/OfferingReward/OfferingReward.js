import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./OfferingReward.module.css";
import Image from "next/image";

import Referral from "../../assets/img/Referral.png";
import Share from "../../assets/Icons/Share.png";
import Reward from "../../assets/Icons/reward.png";

export default function OfferingRewardSection() {
  return (
    <>
      <Row className={styles.ContentContainer}>
          <h1 className={styles.rewardTitle}>
            Earn Rewards with
            <br />
            Open Auto
          </h1>
          <p className={styles.rewardDescription}>
            When you register on Open Auto, you unlock a chance to win exciting
            reward with every referral you make. Every time a user signs up on the platform
            and orders our salesservices you referral code, you earn rewards.s
          </p>
          <Col sm={6}>
            <Row>
              <Col sm={2} className={styles.icons}>
                <Image src={Share} alt="shared" />
              </Col>
              <Col sm={6}>
                <div className={styles.rewardSection}>
                  <h1 className={styles.rewardSectionTitle}>
                    Referral Link from Open Auto App
                  </h1>
                  <p className={styles.referralDescription}>
                  You can invite your friends and family to download the app through the link and get them to sign up. You start earning when your referrals use our services
                  </p>
                </div>
              </Col>
            </Row>
            <Row sm={12}>
              <Col sm={2} className={styles.icons}>
                <Image src={Reward} alt="referral" />
              </Col>
              <Col sm={6}>
                <div>
                  <h1 className={styles.rewardSectionTitle}>
                    Reedem your Rewards
                  </h1>
                  <p className={styles.referralDescription}>
                  You earn 10 points on each successful referral. These points can be redeemed in form of discounts on your next order on Open Auto.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={6}>
            <div className={styles.imageWrapper}>
            <Image src={Referral} alt="Referral" quality={100} />
            </div>
          </Col>
      </Row>
    </>
  );
}
