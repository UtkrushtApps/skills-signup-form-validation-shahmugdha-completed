import React, { useState, useCallback, memo, useMemo } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SPECIAL_CHAR_RE = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(2, "Full name must be at least 2 characters")
    .required("Full name is required"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .test(
      "password-strength",
      "Password is too weak — add uppercase letters, numbers, or special characters",
      (value) => !!value && computeStrength(value).score >= 2
    ),
  role: Yup.string().required("Please select a role"),
});

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "",
};

function computeStrength(password) {
  if (!password) return { score: 0, label: "", level: "none" };

  const score = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    SPECIAL_CHAR_RE.test(password),
  ].filter(Boolean).length;

  if (score <= 1) return { score, label: "Weak", level: "weak" };
  if (score <= 3) return { score, label: "Medium", level: "medium" };
  return { score, label: "Strong", level: "strong" };
}

const PasswordStrengthMeter = memo(({ password }) => {
  const { score, label, level } = useMemo(() => computeStrength(password), [password]);

  if (!password) return null;

  return (
    <div className="password-strength">
      <div className="strength-bars">
        {[1, 2, 3, 4].map((bar) => (
          <div
            key={bar}
            className={`strength-bar ${bar <= score ? `strength-bar--${level}` : ""}`}
          />
        ))}
      </div>
      <span className={`strength-label strength-label--${level}`}>{label}</span>
    </div>
  );
});

const FieldError = memo(({ name }) => (
  <ErrorMessage name={name}>
    {(msg) => <span className="field-error">{msg}</span>}
  </ErrorMessage>
));

function SignupForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback((values, { setSubmitting }) => {
    setSubmitted(true);
    setSubmitting(false);
  }, []);

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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values }) => (
        <Form className="signup-form">
          <h2>Create your Utkrusht account</h2>

          <div className="form-field">
            <label htmlFor="fullName">Full name</label>
            <Field
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Jane Doe"
            />
            <FieldError name="fullName" />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="jane@example.com"
            />
            <FieldError name="email" />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Choose a password"
            />
            <PasswordStrengthMeter password={values.password} />
            <FieldError name="password" />
          </div>

          <div className="form-field">
            <label htmlFor="role">Primary role</label>
            <Field as="select" id="role" name="role">
              <option value="" disabled>
                Select a role
              </option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">Fullstack Developer</option>
              <option value="data">Data Scientist</option>
            </Field>
            <FieldError name="role" />
          </div>

          <button
            className="submit-button"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default memo(SignupForm);
