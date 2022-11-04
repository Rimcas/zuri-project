import React from "react";
import "./contacts.css"

function contacts() {
  return (
    <div id="wrapper">
      <section className="head">
        <header>Contact me</header>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </section>

      <div>
        <form>
          <div className="first__lastname">
            <div id="first_name">
              <label for="First name">First name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                required
              ></input>
            </div>

            <div id="last_name">
              <label for="Last name">Last name</label>
              <input
                type="text"
                placeholder="Enter your Last name"
                required
              ></input>
            </div>
          </div>
          <div id="email">
            <label for="email">Email</label>
            <input
              type="email"
              placeholder="yourname@email.com"
              required
            ></input>
          </div>

          <div>
            <textarea
              id="message"
              placeholder="send me a message and i will reply you as soon as possible..."
            ></textarea>
            <label></label>
          </div>

          <div>
            <input></input>
            <p>
              you agree to providing your data to CASIDI MICHAEL who may contact
              you.
            </p>
          </div>

          <button id="btn__submit">Send message</button>
        </form>
      </div>
    </div>
  );
}

export default contacts;
