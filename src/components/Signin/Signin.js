import { Modal, Button } from "react-bootstrap";
import styles from "./Signin.module.css";
import Form from "react-bootstrap/Form";
import Link from "next/link";

import { Formik } from "formik";
import * as yup from "yup";

export default function Signin(props) {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .min(2, "Must be more than 10 characters")
      .required("Please enter your email"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, one number and one special character"
      )
      .min(2, "Must be more than 10 characters")
      .required("Please enter your password"),
  });

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        contentClassName={styles.loginModal}
      >
        <Modal.Header
          closeButton
          className={styles.closeButton}
          backdropclassname={styles.closeButton}
        />
        <Modal.Body className={styles.modalBody}>
          <h4 className={styles.loginTitle}>Log In</h4>
          <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              email: "",
              password: "",
            }}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    type="email"
                    placeholder="Enter email or phone number"
                    style={{
                      color: "white",
                      background: "#2D3442",
                      marginTop: "2rem",
                      width: "384px",
                      borderRadius: "22px",
                      marginBottom: "1.5rem",
                      border: "1px solid #B5B8B9",
                      height: "50px",
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                    type="password"
                    placeholder="Enter password"
                    style={{
                      color: "white",
                      background: "#2D3442",
                      marginTop: "2rem",
                      width: "384px",
                      borderRadius: "22px",
                      marginBottom: "1.5rem",
                      border: "1px solid #B5B8B9",
                      height: "50px",
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <p style={{ float: "right", color: "#B5B8B9" }}>
                  Forgot Password
                </p>
                <Link href="/OpenAutoMain/OpenAutoMain" passHref>
                  <button type="submit" className={styles.loginInput}>
                    Sign In
                  </button>
                </Link>
                <p style={{ textAlign: "center", paddingTop: "1rem" }}>
                  Dont have account?
                  <span style={{ color: "#8001D4" }}> Sign Up</span>
                </p>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}
