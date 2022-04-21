import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "./ContactTouch.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GetTouch from "../../assets/img/Map.png";

// import MapLocation from "../../components/Map/Map";

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function ContactTouch() {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <Row className={styles.ContentContainer}>
          <Col sm={7}>
            <h1 className={styles.connectTitle}>Get in Touch with us</h1>
            <p className={styles.connectDescription}>
              Reach us out on the contact number or email us, we’ll try our best
              to resolve your issue.
            </p>
            <div className="register-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formGroup}>
                  <input
                    name="fullname"
                    type="text"
                    {...register("fullname")}
                    className={`form-control ${
                      errors.fullname ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your full name"
                  />
                  <div className="invalid-feedback">
                    {errors.fullname?.message}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <input
                    name="username"
                    type="text"
                    {...register("username")}
                    className={`form-control ${
                      errors.username ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your phonenumber"
                  />
                  <div className="invalid-feedback">
                    {errors.username?.message}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <textarea
                    name="email"
                    type="textarea"
                    {...register("email")}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your Message"
                  />
                  <div className="invalid-feedback">
                    {errors.email?.message}
                  </div>
                </div>
                <br />
                <br />
                <div>
                  <Button type="submit" className={styles.headerButtons}>
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </Col>
          <Col sm={5}>
            <div className={styles.touchImage}>
              {/* <MapLocation/> */}
              <Image src={GetTouch} alt="Get in touch" quality={100} />
            </div>
            <Row>
              <Col>
                <div>
                  <p className={styles.phoneNumber}>
                    <FontAwesomeIcon icon={faPhone} /> +769 586 4558
                  </p>
                  <p className={styles.subphoneNumber}>+769 586 4558</p>
                  <p className={styles.addressLocation}>
                    <FontAwesomeIcon icon={faLocationDot} /> OpenAuto, Vancouver
                  </p>
                    <p className={styles.addressLocationText}>
                      British Columbia, Canada
                    </p>
                </div>
              </Col>
              <Col>
                <h3 className={styles.emailAddress}>
                  <FontAwesomeIcon icon={faEnvelope} /> service@openauto.ca
                </h3>
              </Col>
            </Row>
          </Col>
      </Row>
    </>
  );
}

export default ContactTouch;
