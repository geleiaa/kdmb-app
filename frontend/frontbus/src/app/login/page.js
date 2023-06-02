"use client"
const { default: Footer } = require("../../components/Footer")
const { default: HeaderNav } = require("../../components/HeaderNav")
import { useRef } from 'react';
import styles from './page.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const sendReqForBackend = async (email, password) => {
    try {
        const resp = await fetch('http://localhost:1234/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await resp.json();
        
        //if (data.message === "Você logou!!") RedirectPage();
        
        console.log('login =>', data);

        return data;

    } catch (error) {
        console.log('signon err =>', error);
    }
}

const RedirectPage = () => {
    setTimeout(() => {
        window.location.replace('/');
    }, 2000);
}

const Login = () => {

    const MailInputRef = useRef();
    const PassInputRef = useRef();

    const submitUser = e => {
        e.preventDefault();

        const email = MailInputRef.current.value;
        const pass = PassInputRef.current.value;

        sendReqForBackend(email, pass);
    }

    const notify = () => toast("Logado com Sucesso!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });


    return (
        <>
            <HeaderNav />
            <div>
                <ToastContainer />
            </div>
            <div className={styles.card}>
                <div className={styles.card_header}>
                    <div className={styles.text_header}>Login</div>
                </div>
                <div className={styles.card_body}>
                    <form onSubmit={submitUser} action="#">
                        <div className={styles.form_group}>
                            <label name="email">Email:</label>
                            <input ref={MailInputRef} required="" className={styles.form_control} name="email" id="email" type="email" />
                        </div>
                        <div className={styles.form_group}>
                            <label name="password">Senha:</label>
                            <input ref={PassInputRef} required="" className={styles.form_control} name="password" id="password" type="password" />
                        </div>
                        <input onClick={notify} type="submit" className={styles.btn} value="submit" />
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login;