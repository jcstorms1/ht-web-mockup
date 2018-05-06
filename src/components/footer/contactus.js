import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs = () => {
  const onChange = value => {
    console.log("Captcha value: ", value);
  };

  let captcha;

  return (
    <section>
      <form onSubmit={() => captcha.execute()}>
        <div className="name">
          <input type="text" placeholder="Name" />
        </div>
        <div className="email">
          <input type="email" placeholder="Email" />
        </div>
        <div className="message">
          <textarea placeholder="Message" rows="5" />
        </div>
        <div className="button">
          <button>Send</button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
