import React from "react";

const ContactUs = () => {
  return (
    <section>
      <form>
        <div className="name">
          <input type="text" placeholder="Name" />
        </div>
        <div className="email">
          <input type="email" placeholder="Email" />
        </div>
        <div className="message">
          <textarea placeholder="Message" />
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
