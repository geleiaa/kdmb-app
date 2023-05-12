const { default: Footer } = require("../../components/Footer")
const { default: HeaderNav } = require("../../components/HeaderNav")
import styles from './page.module.css';

const Login = () => {
    return (
        <>
            <HeaderNav />
            <div className={styles.card}>
                <div className={styles.card_header}>
                    <div className={styles.text_header}>Login</div>
                </div>
                <div className={styles.card_body}>
                    <form action="#">
                        <div className={styles.form_group}>
                            <label name="email">Email:</label>
                            <input required="" className={styles.form_control} name="email" id="email" type="email" />
                        </div>
                        <div className={styles.form_group}>
                            <label name="password">Password:</label>
                            <input required="" className={styles.form_control} name="password" id="password" type="password" />
                        </div>
                        <input type="submit" className={styles.btn} value="submit" />
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login;