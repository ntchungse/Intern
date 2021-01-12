import React from "react";
import { Container } from "reactstrap";
import LinkBar from "../../components/LinkBar";
import ContactContent from './ContactContent';

function Contact() {
  return (
    <div style={{ minHeight: "75px", paddingTop: "75px" }}>
      <LinkBar
        arrLink={[{ path: "/contact", content: "Liên hệ", isActive: true }]}
      />
      <ContactContent />
    </div>
  );
}

export default Contact;
