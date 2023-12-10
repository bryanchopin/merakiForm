import styles from './app.module.css';
import InputEmail from "../components/inputs/email/inputEmail"
import InputPassword from "../components/inputs/password/inputPassword"

export default function Home() {

  const handleSubmit = (e) => {
    e.preventDefault();
    // UserLogin(email, password);
    console.log('submit');
  }

  return (
    <>
      <main>
        <section className={styles.formContainer}>
          <article className={styles.formInfoContainer}>
            <div className={styles.titleContainer}></div>
            <div className={styles.form}>
              <form>
                <InputEmail/>
                <InputPassword/>
                <div className={`${styles.formGroup} ${styles.displayFlex}`}>
                  <div className={styles.textContainer}>
                    <a href="/.">No account? <u>No problem</u></a>
                  </div>
                  <button onClick={handleSubmit} type="submit">Sign in</button>
                </div>
                <div className={styles.formGroup}>
                  <p>Incorrect email or password</p>
                </div>
              </form>

            </div>
          </article>

        </section>
        <section className={styles.imageContainer}>

        </section>
      </main>
    </>
  )
}
