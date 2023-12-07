// PasswordInput.js

import { useState } from 'react';
import styles from './inputPassword.module.css';
import { IoEye, IoEyeOff } from "react-icons/io5";

const PasswordInput = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className={styles.formbox}>
      <input
        type={passwordVisible ? 'text' : 'password'}
        defaultValue="mypassword"
        placeholder="password"
        id="myPass"
        className={styles.input}
      />
      <span id="showPass" className={styles.showPass} onClick={togglePasswordVisibility}>
        {passwordVisible ? <IoEye color='black'/> : < IoEyeOff color='black'/>}
      </span>
    </div>
  );
};

export default PasswordInput;
