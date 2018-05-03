import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs = () => {
  const onChange = value => {
    console.log("Captcha value: ", value);
  };

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
        <ReCAPTCHA
          sitekey="6Lcv8FYUAAAAAED1yHHAWXC64elE8bFuUtbvfpwP"
          onchange={onChange}
        />
      </form>
    </section>
  );
};

export default ContactUs;
