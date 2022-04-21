import styles from "./About.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

import CarBuilding from "../../assets/img/car_building.png";
import Ecosystem from "../../assets/img/ecosystem.png";
import Intelligent from "../../assets/Icons/intelligent.png";
import Flexible from "../../assets/Icons/Flexible_payment.png";
import LiveTrack from "../../assets/Icons/Live_Track.png";
import Payment from "../../assets/Icons/Payment.png";
import Discount from "../../assets/Icons/Discount.png";
import CarPickup from "../../assets/Icons/car_picking_up.png";

import BannerHome from "../../assets/img/Banner_home.png";
import TimeSaving from "../../assets/img/time_saving.png";

export default function About() {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#161B25",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Row className={styles.ContentContainer}>
            <Col md={6} sm={6}>
              <div>
                <h2 className={styles.textTitle}>About us</h2>
                <h1 className={styles.title}>Open Auto</h1>
                <p
                  style={{
                    marginTop: "19px",
                    fontSize: "0.875rem",
                  }}
                >
                  {" "}
                  Open Auto was founded in 2021 with a vision to make auto
                  repair and maintenance accessible to customers at the
                  convenience of their homes. Vehicle repairs are uncertain and
                  finding a reliable garage can be frustrating and a
                  time-consuming process, especially when you are in a rush. We
                  bridge this gap by providing a platform to get automotive
                  repair and maintenance services at the comfort of your
                  doorstep. <br></br>
                  <br></br>At Open Auto, customer satisfaction is of utmost
                  priority and we guarantee reliable and quality services in all
                  our service outlets. Rest assured, you can always reach out to
                  us if you are dissatisfied with the service, and your concern
                  will be resolved in the best way possible.
                </p>
              </div>
            </Col>
            <Col md={6} sm={6}>
              <h3 style={{ fontSize: "1.125rem" }}>
                <span>
                  <Image
                    src={Intelligent}
                    alt=""
                    style={{ marginRight: "18px" }}
                  />
                </span>{" "}
                Intelligent Optimization
              </h3>
              <p style={{ margin: "0 34px 0 54px", fontSize: "0.875rem" }}>
                {" "}
                We simplify the entire process with a few easy steps that allow
                us to connect your car with the nearest reputable service
                provider
              </p>
              <h3 style={{ fontSize: "1.125rem", marginTop: "1rem" }}>
                <span>
                  <Image
                    src={Flexible}
                    alt=""
                    style={{ marginRight: "18px" }}
                  />
                </span>{" "}
                Flexible Payment
              </h3>
              <p style={{ margin: "0 34px 0 54px", fontSize: "0.875rem" }}>
                {" "}
                Along with the commonly used payment options, we also facilitate
                SlicePay which helps you to get instant credit for your repair
                bills
              </p>
            </Col>
            <Row>
              <div className={styles.carbuilding}>
                <Image src={CarBuilding} alt="" />
              </div>
            </Row>
          </Row>
        </Container>
      </div>

      {/* -------------------------------------------------Second Section----------------------------------- */}
      <div
        style={{
          minHeight: "80vh",
          backgroundColor: "#161B25",
          display: "flex",
          alignItems: "center",
          marginTop: "10rem"
        }}
      >
        <Container>
          <Row >
            <div>
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "2.25rem",
                  margin: "19px 0 0",
                  fontFamily: "Montserrat,sans-serif",
                }}
              >
                {" "}
                Focused on Time Saving
              </h1>
              <p
                style={{
                  fontSize: "0.875rem",
                  wordWrap: "break-word",
                  position: "relative",
                }}
              >
                {" "}
                We intend to make this process seamless and time-saving with an
                easy-to-use mobile application that allows you to access our
                services quickly and conveniently
              </p>
            </div>
            <Col md={6} sm={6}>
              <h3 style={{ fontSize: "1.125rem" }}>
                <span>
                  <Image
                    src={Intelligent}
                    alt=""
                    style={{ marginRight: "18px" }}
                  />
                </span>{" "}
                Easy to navigate
              </h3>
              <p style={{ margin: "0 34px 0 54px", fontSize: "0.875rem" }}>
                {" "}
                You can get started by providing basic details about you and
                scheduling a pick-up time of your vehicle
              </p>
              <h3 style={{ fontSize: "1.125rem", marginTop: "1rem" }}>
                <span>
                  <Image
                    src={Flexible}
                    alt=""
                    style={{ marginRight: "18px" }}
                  />
                </span>{" "}
                Accommodates your needs
              </h3>
              <p style={{ margin: "0 34px 0 54px", fontSize: "0.875rem" }}>
                {" "}
                We pick your vehicle from your preferred location and get the
                job done while you get going with your day
              </p>
            </Col>
            <Col md={6} sm={6}>
              <Image
                src={TimeSaving}
                alt=""
                width="500"
                height="234"
                style={{
                  width: "645px",
                  height: "329px",
                  margin: "97px auto 0",
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>


      {/* --------------------------------------Third Section--------------------------------- */}
      <div
        style={{
          minHeight: "40vh",
          backgroundColor: "#161B25",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Row>
            <div>
              <h1 className={styles.OpenTitle}>Open Auto’s Ecosystem</h1>
              <p>
                Open Auto’s unique delivery-based concept makes it easy for you
                to get expert assistance with just a few steps. All the service
                outlets in our Open Auto network are thoroughly vetted and
                provide the best quality services for automobiles
              </p>
              <Image src={Ecosystem} alt="" width="517" height="300" />
            </div>
            <Col>
              <Row>
                <Col md={6} sm={6}>
                  <h3 className={styles.PickupTitle}>
                    <span style={{ marginRight: "18px" }}>
                      <Image src={CarPickup} alt="" />
                    </span>{" "}
                    Easy Pick-ups
                  </h3>
                  <p style={{ margin: "0 13px 0 68px", fontSize: "0.875rem" }}>
                    {" "}
                    Book your preferred slot for pick-up of your vehicle
                  </p>
                </Col>
                <Col md={6} sm={6}>
                  <h3 className={styles.TrackTitle}>
                    <span style={{ marginRight: "18px" }}>
                      <Image src={LiveTrack} alt="" />
                    </span>{" "}
                    Track Live
                  </h3>
                  <p style={{ margin: "0 13px 0 68px", fontSize: "0.875rem" }}>
                    {" "}
                    Track your car service real-time and get status updates
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={6} sm={6}>
                  <h3 className={styles.TrackTitle}>
                    <span style={{ marginRight: "18px" }}>
                      <Image src={Payment} alt="" />
                    </span>{" "}
                    PaymentOnline
                  </h3>
                  <p style={{ margin: "0 13px 0 68px", fontSize: "0.875rem" }}>
                    {" "}
                    We offer flexible payment options for your convenience
                  </p>
                </Col>
                <Col md={6} sm={6}>
                  <h3 className={styles.DiscountTitle}>
                    <span style={{ marginRight: "18px" }}>
                      <Image src={Discount} alt="" />
                    </span>{" "}
                    Discounts
                  </h3>
                  <p style={{ margin: "0 13px 0 68px", fontSize: "0.875rem" }}>
                    {" "}
                    Earn exciting rewards on your referrals, share now!
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
