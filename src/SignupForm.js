import React, { useState } from "react";

function SignupForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="signup-success">
        <h2>Signup successful</h2>
        <p>
          Your profile has been created. You can now explore assessments on
          Utkrusht.
        </p>
      </div>
    );
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Create your Utkrusht account</h2>
      <div className="form-field">
        <label htmlFor="fullName">Full name</label>
        <input id="fullName" name="fullName" type="text" placeholder="Jane Doe" />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="jane@example.com" />
      </div>
      <div className="form-field">
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" placeholder="Choose a password" />
      </div>
      <div className="form-field">
        <label htmlFor="role">Primary role</label>
        <select id="role" name="role" defaultValue="">
          <option value="" disabled>
            Select a role
          </option>
          <option value="frontend">Frontend Developer</option>
          <option value="backend">Backend Developer</option>
          <option value="fullstack">Fullstack Developer</option>
          <option value="data">Data Scientist</option>
        </select>
      </div>
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default SignupForm;
