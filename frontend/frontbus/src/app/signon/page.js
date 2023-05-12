const { default: Footer } = require("../../components/Footer")
const { default: HeaderNav } = require("../../components/HeaderNav")
import styles from './page.module.css';

const SignOn = () => {
    return (
        <>
            <HeaderNav />
            <div className={styles.card}>
                <div className={styles.card_header}>
                    <div className={styles.text_header}>Register</div>
                </div>
                <div className={styles.card_body}>
                    <form action="#">
                        <div className={styles.form_group}>
                            <label name="username">Username:</label>
                            <input required="" className={styles.form_control} name="username" id="username" type="text" />
                        </div>
                        <div className={styles.form_group}>
                            <label name="email">Email:</label>
                            <input required="" className={styles.form_control} name="email" id="email" type="email" />
                        </div>
                        <div className={styles.form_group}>
                            <label name="password">Password:</label>
                            <input required="" className={styles.form_control} name="password" id="password" type="password" />
                        </div>
                        <div className={styles.form_group}>
                            <label name="confirm-password">Confirm Password:</label>
                            <input required="" className={styles.form_control} name="confirm-password" id="confirm-password" type="password" />
                        </div>
                        <input type="submit" className={styles.btn} value="submit" />
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SignOn;