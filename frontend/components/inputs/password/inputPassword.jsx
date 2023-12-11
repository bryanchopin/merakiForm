import { useState } from 'react';
import styles from './inputPassword.module.css';
import { IoEye, IoEyeOff } from "react-icons/io5";

const PasswordInput = (setValue) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');



  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    setValue.setValue(inputPassword);
  }

  return (
    <div className={styles.formGroup}>
    <input
      value={password}
      onChange={handlePasswordChange}
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
