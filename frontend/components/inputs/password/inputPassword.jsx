import { useState } from 'react';
import styles from './inputPassword.module.css';
import { IoEye, IoEyeOff } from "react-icons/io5";

const PasswordInput = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className={styles.formGroup}>
    <input
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='Enter password'
      type={passwordVisible ? 'text' : 'password'}
      id="password" name="password" />
    <span id="showPass" className={styles.showPass} onClick={togglePasswordVisibility}>
      {passwordVisible ? <IoEye color='black'/> : < IoEyeOff color='black'/>}
    </span>
  </div>
  );
};

export default PasswordInput;
