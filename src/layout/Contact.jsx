import React from "react";
import styles from "./Contact.module.scss";
import Wrapper from "../components/Wrapper";
import Headings from "../components/Headings";
import FormComponent from "../components/FormComponent";
import Map from "../components/Map";

function Contact() {
  return (
    <Wrapper>
      <Headings heading="Contact Me" subheading="Get in touch" />

      <div className={styles.contact} name="contact">
        <div className={styles.contact__container}>
          <span className={styles.contact__heading}>Drop me a message</span>
          <FormComponent />
        </div>

        <Map />
      </div>
    </Wrapper>
  );
}

export default Contact;
