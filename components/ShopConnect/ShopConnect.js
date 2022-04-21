import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./Shopconnect.module.css";
import Image from "next/image";

import GetTouch from "../../assets/img/Get_in_touch.png";

import { Formik } from "formik";
import * as yup from "yup";

export default function ShopConnect() {
  const schema = yup.object().shape({
    name: yup.string().max(255).required("Please Enter your shop name"),
    location: yup.string().required("Please fill your address"),
    phonenumber: yup
      .string()
      .required("Please enter your phone number")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      ),
    message: yup.string().required("Please enter your message"),
  });

  return (
    <>
      <Row className={styles.ContentContainer}>
          <Col sm={6}>
            <h1 className={styles.connectTitle}>Connect with us</h1>
            <p className={styles.connectDescription}>
              Interested to join our trusted network of service providers? join
              us in providing reliable auto care and quality assistance to our
              valued customers
            </p>
            <br />
            <Formik
              validationSchema={schema}
              onSubmit={console.log}
              initialValues={{
                name: "",
                location: "",
                phonenumber: "",
                message: "",
              }}
            >
              {({ handleSubmit, handleChange, values, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                      type="shopname"
                      placeholder="Shop name"
                      style={{
                        color: "white",
                        background: "#0C1017",
                        marginTop: "2rem",
                        width: "100%",
                        borderRadius: "22px",
                        marginBottom: "1.5rem",
                        border: "1px solid #B5B8B9",
                        height: "52px",
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      name="location"
                      value={values.location}
                      onChange={handleChange}
                      isInvalid={!!errors.location}
                      type="location"
                      placeholder="Location"
                      style={{
                        color: "white",
                        background: "#0C1017",
                        marginTop: "2rem",
                        width: "100%",
                        borderRadius: "22px",
                        marginBottom: "1.5rem",
                        border: "1px solid #B5B8B9",
                        height: "52px",
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.location}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      name="phonenumber"
                      value={values.phonenumber}
                      onChange={handleChange}
                      isInvalid={!!errors.phonenumber}
                      type="phonenumber"
                      placeholder="Phone Number"
                      style={{
                        color: "white",
                        background: "#0C1017",
                        marginTop: "2rem",
                        width: "100%",
                        borderRadius: "22px",
                        marginBottom: "1.5rem",
                        border: "1px solid #B5B8B9",
                        height: "52px",
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phonenumber}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      isInvalid={!!errors.message}
                      as="textarea"
                      rows={3}
                      placeholder="Enter your Message"
                      style={{
                        color: "white",
                        background: "#0C1017",
                        marginTop: "2rem",
                        width: "100%",
                        borderRadius: "22px",
                        border: "1px solid #B5B8B9",
                        height: "124px",
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button type="submit" className={styles.headerButtons}>
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
          <Col sm={6}>
            <div className={styles.imageSection}>
              <Image src={GetTouch} alt="Get in touch" quality={100} />
            </div>
          </Col>
      </Row>
    </>
  );
}
