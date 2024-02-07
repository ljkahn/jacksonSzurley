import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

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
          setFormData({
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="center-container">
      <div className="contact-container">
        <div className="contact-image">
          <Card
            sx={{
              maxHeight: "100%",
              width: 300,
              marginTop: "3rem",
            }}
          >
            <CardMedia
              component="img"
              height="100%"
              image="./src/assets/contactPhoto.jpg"
              alt="Fat Sully's"
              style={{ marginLeft: "2rem" }} // Adjust margin-left for spacing
            />
          </Card>
        </div>

        <div className="contact-form" style={{ marginLeft: "2rem" }}>
          <h3 className="text-center inquiry">
            Please send me the following information in your inquiry
          </h3>

          {isEmailSent && (
            <div className="alert alert-success" role="alert">
              Email sent successfully!
            </div>
          )}

          <Form ref={formRef} onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              type="name"
              name="name"
              margin="normal"
              onChange={handleChange}
              value={formData.name}
              style={{ width: "45%" }}
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Subject"
              variant="outlined"
              type="text"
              name="subject"
              margin="normal"
              onChange={handleChange}
              value={formData.subject}
              style={{ width: "45%" }}
            />
            <br />
            <TextField
              id="outlined-basic"
              label="How can I help you?"
              variant="outlined"
              type="text"
              name="message"
              placeholder=""
              multiline
              rows={4}
              margin="normal"
              onChange={handleChange}
              value={formData.message}
              style={{ width: "45%" }}
            />
            <br />
            <Button
              variant="contained"
              className="btn"
              type="submit"
              color="inherit"
              style={{ marginTop: "3rem" }}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
