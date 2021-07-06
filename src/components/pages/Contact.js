import { React, useState } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    let target = e.target;
    let inputType = target.name;
    let inputValue = target.value;

    if (inputType === "fullName") {
      setFullName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFullName("");
    setEmail("");
    let message = document.getElementById("messageText");
    message.value = "";
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
            value={fullName}
            name="fullName"
            onChange={handleInputChange}
            type="text"
            className="form-control mb-2"
            id="exampleFormControlInput1"
          />

          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
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
            id="messageText"
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
