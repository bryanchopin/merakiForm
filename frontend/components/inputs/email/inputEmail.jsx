import styles from "./inputEmail.module.css";
import { useState } from "react";

export default function EmailInput(setValue) {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);


  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail)
    setValue.setValue(inputEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(inputEmail === "" || emailRegex.test(inputEmail));
  };

  const emailInputState = isValidEmail
    ? styles.formGroupValid
    : styles.formGroupInvalid;

  return (
    <>
      <div className={emailInputState}>
        <input
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter email"
          type="email"
          id="email"
          name="email"
        />
        {!isValidEmail && <p>Please provide a valid email</p>}
      </div>
    </>
  );
}
