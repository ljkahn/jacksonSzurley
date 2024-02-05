import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

const isContactPage = true;
function Contact() {
  const navigate = useNavigate();
  const formRef = useRef(); // Create a ref for the form
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use the appropriate EmailJS template, service, and user ID
    emailjs
      .sendForm(
        "service_rl9e4x9",
        "template_974g5lq",
        formRef.current, // Use the ref here
        "o0rmbvpLvdPPViphx"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true);
          // You can also clear the form here if needed
          setFormData({
            email: "",
            message: "",
          });
          //   // Optionally, navigate to a different page after the email is sent
          //   navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className={`sticky-icons ${isContactPage ? "contact-page" : "work-page"}`}
    >
      <h3 className="text-center inquiry">
        Please send me the following information in your inquiry
      </h3>

      {isEmailSent && (
        <div className="alert alert-success" role="alert">
          Email sent successfully!
        </div>
      )}
      <Card sx={{ maxHeight: "100%", width: 300 }}>
        {" "}
        <CardMedia
          component="img"
          height="194"
          image="./src/assets/contactPhoto.jpg"
          alt="Fat Sully's"
        />
      </Card>

      <br></br>
      <Form ref={formRef} onSubmit={handleSubmit} style={{ marginLeft: "1%" }}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="=name"
          name="name"
          style={{
            backgroundColor: "#202020",
            marginTop: "3rem",
            width: "25%",
          }}
        />
        <br></br>
        <TextField
          id="outlined-basic"
          label="Subject"
          variant="outlined"
          type="text"
          name="name"
          placeholder=""
          style={{
            backgroundColor: "#202020",
            marginTop: "3rem",
            width: "30%",
            size: "small",
          }}
        />
        <br></br>
        <TextField
          id="outlined-basic"
          label="How can I help you?"
          variant="outlined"
          type="text"
          name="name"
          placeholder=""
          multiline
          rows={4}
          style={{
            backgroundColor: "#202020",
            marginTop: "3rem",
            width: "45%",
            size: "small",
          }}
        />
        <br></br>

        {/* <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder=""
              style={{ backgroundColor: "#202020" }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder=""
              style={{ backgroundColor: "#202020" }}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} sm={12} controlId="" className="mb-3">
            <Form.Label>Design Idea</Form.Label>
            <textarea
              className="form-control"
              name="designIdea"
              placeholder=""
              style={{
                height: "7rem",
                paddingTop: "1rem", // Adjust the top padding as needed
                verticalAlign: "top", // Set vertical alignment to top
                backgroundColor: "#202020",
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="">
            <Form.Label>Placement</Form.Label>
            <Form.Control
              type="text"
              name="placement"
              placeholder=""
              style={{ backgroundColor: "#202020" }}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Size</Form.Label>
            <Form.Control
              type="text"
              name="size"
              style={{ backgroundColor: "#202020" }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Budget</Form.Label>
            <Form.Control
              type="text"
              name="budget"
              style={{ backgroundColor: "#202020" }}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Black and Grey/Color</Form.Label>
            <Form.Control
              type="text"
              name="colorPreference"
              style={{ backgroundColor: "#202020" }}
            />
          </Form.Group>
        </Row> */}
        <Button
          variant="contained"
          className="btn"
          type="submit"
          color="inherit"
          style={{ marginTop: "3rem" }}
        >
          Submit
        </Button>
        {/* <Button variant="dark" className="btn" type="submit">
          Submit
        </Button> */}
      </Form>
    </div>
  );
}

export default Contact;
