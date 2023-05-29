import React from "react";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

const Contact = () => {


  return (
    <>
      <section>
        <div className="container my-3">
          <div>
            <h2 className="contactUs_head">Contact Us</h2>
          </div>
          <ContactCard />
          <h4 className="contactUs_head">
            We'd love to hear <span className="from_you">from you</span>
          </h4>

          <div className="col-md-4 m-auto">
            <div className="">
              <ContactForm/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
