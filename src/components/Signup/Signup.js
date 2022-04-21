import { Modal, Button } from "react-bootstrap";
import styles from "../Signin/Signin.module.css";
import Form from "react-bootstrap/Form";

import { Formik } from "formik";
import * as yup from "yup";

export default function Signup(props) {
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Must be more than 10 characters")
      .required("Please enter your name"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, one number and one special character"
      )
      .min(2, "Must be more than 10 characters")
      .required("Please enter your password"),
    phoneNumber: yup
      .string()
      .matches(10, "Please enter valid phone number")
      .required("Please enter your phone number"),
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
          style={{ border: "0" }}
          backDropClassName={styles.closeButton}
        />
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h4
            style={{
              color: "#B5B8B9",
              fontSize: "1.5rem",
              fontFamily: "Montserrat",
            }}
          >
            Sign Up
          </h4>
          <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              name: "",
              phone: "",
              password: "",
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
                    type="name"
                    placeholder="Enter your Name"
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
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    isInvalid={!!errors.phoneNumber}
                    type="phoneNumber"
                    placeholder="Enter phone number"
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
                    {errors.phoneNumber}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                    type="password"
                    placeholder="Create password"
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
                <button
                  className={styles.loginInput}
                  style={{ marginTop: "2rem" }}
                >
                  Sign Up
                </button>
                <p style={{ textAlign: "center", paddingTop: "1rem" }}>
                  Already have an account?{" "}
                  <span style={{ color: "#8001D4", cursor: "pointer" }}>
                    Login
                  </span>
                </p>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}
