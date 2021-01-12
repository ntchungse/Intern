import React, { useState } from "react";
import { Container } from "reactstrap";
import Map from "./Map";

function ContactContent() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${data.name} Email: ${data.email} Message: ${data.message}`);
  };
  return (
    <Container className="wrapper">
      <h3 className="heading">Liên hệ</h3>
      <div className="contact">
        <div className="contact__map">
          <Map />
        </div>
        <div className="contact__form">
          <p>GỬI EMAIL CHO CHÚNG TÔI</p>
          <form onSubmit={handleSubmit}>
            <div className="group">
              <label>
                <span>Tên *</span>
                <input
                  name="name"
                  onChange={handleInputChange}
                  value={data.name}
                  type="text"
                />
              </label>
            </div>
            <div className="group">
              <label>
                <span>Email *</span>
                <input
                  name="email"
                  onChange={handleInputChange}
                  value={data.email}
                  type="email"
                />
              </label>
            </div>
            <div className="group">
              <label>
                <span>Tin nhắn *</span>
                <textarea
                  name="message"
                  onChange={handleInputChange}
                  value={data.message}
                />
              </label>
            </div>
            <button type="submit">Gửi</button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default ContactContent;
