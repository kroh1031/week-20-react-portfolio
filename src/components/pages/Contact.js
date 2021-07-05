import { React, useState } from "react";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container mt-3">
      <h1>Contact</h1>
      <div className="mb-3">
        <form>
          <label for="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control mb-2"
            id="exampleFormControlInput1"
          />

          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control mb-2"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />

          <label for="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            className="form-control mb-2"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button className="btn btn-secondary" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
