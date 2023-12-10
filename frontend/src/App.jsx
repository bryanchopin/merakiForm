import styles from "./app.module.css";
import InputEmail from "../components/inputs/email/inputEmail";
import InputPassword from "../components/inputs/password/inputPassword";
import { UserLogin } from "../controller/userOperation"
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("12172328");

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (email === "" || password === "") {
    //   alert("Please fill in all fields");
    //   return;
    // }
    UserLogin("email@email.com", "12172328");
    console.log("submit");
  };

  return (
    <>
      <main>
        <section className={styles.formContainer}>
          <article className={styles.formInfoContainer}>
            <div className={styles.titleContainer}></div>
            <div className={styles.form}>
              <form>
                <InputEmail
                  setValue={(prev) => {
                    setEmail(prev);
                  }}
                />
                <InputPassword
                  setValue={(prev) => {
                    setPassword(prev);
                  }}
                />
                <div className={`${styles.formGroup} ${styles.displayFlex}`}>
                  <div className={styles.textContainer}>
                    <a href="/.">
                      No account? <u>No problem</u>
                    </a>
                  </div>
                  <button onClick={handleSubmit} type="submit">
                    Sign in
                  </button>
                </div>
                <div className={styles.formGroup}>
                  <p>Incorrect email or password</p>
                </div>
              </form>
            </div>
          </article>
        </section>
        <section className={styles.imageContainer}></section>
      </main>
    </>
  );
}
