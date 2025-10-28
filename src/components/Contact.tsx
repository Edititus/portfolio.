import React from "react";

const Contact: React.FC = () => {
  return (
    <>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form
          action="https://formspree.io/f/mbjepwad"
          method="POST"
          className="form"
          data-form
        >
          <div className="input-wrapper">
            <input
              id="name"
              type="text"
              name="name"
              className="form-input"
              placeholder="Full Name"
              required
              data-form-input
            />

            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              placeholder="Email Address"
              required
              data-form-input
            />
          </div>

          <textarea
            id="message"
            name="message"
            className="form-input"
            placeholder="Message"
            required
            data-form-input
          ></textarea>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Submit</span>
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
