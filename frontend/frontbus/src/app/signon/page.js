"use client"
const { default: Footer } = require("../../components/Footer")
const { default: HeaderNav } = require("../../components/HeaderNav")
import { useRef } from 'react';
import styles from './page.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const sendReqForBackend = async (name, email, password) => {
    try {
        const resp = await fetch('http://localhost:1234/users/sign-on', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await resp.json();

        if (data.message === "Usuário criado!") RedirectPage();

        return data;

    } catch (error) {
        console.log('signon err =>', error);
    }
}

const RedirectPage = () => {
    setTimeout(() => {
        window.location.replace('/login');
    }, 2000);
}


const SignOn = () => {

    const UserInputRef = useRef();
    const MailInputRef = useRef();
    const PassInputRef = useRef();
    //const PassConfirmInputRef = useRef();

    const submitForm = (e) => {
        e.preventDefault();

        const name = UserInputRef.current.value;
        const email = MailInputRef.current.value;
        const pass = PassInputRef.current.value;
        //const passConf = PassConfirmInputRef.current.value;

        sendReqForBackend(name, email, pass);
    }

    const notify = () => toast("Usuário Resgistrado!", {
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
                    <div className={styles.text_header}>Registrar</div>
                </div>
                <div className={styles.card_body}>
                    <form onSubmit={submitForm} action="#">
                        <div className={styles.form_group}>
                            <label name="username">Nome:</label>
                            <input ref={UserInputRef} required="" className={styles.form_control} name="username" id="username" type="text" />
                        </div>
                        <div className={styles.form_group}>
                            <label name="email">Email:</label>
                            <input ref={MailInputRef} required="" className={styles.form_control} name="email" id="email" type="email" />
                        </div>
                        <div className={styles.form_group}>
                            <label name="password">Senha:</label>
                            <input ref={PassInputRef} required="" className={styles.form_control} name="password" id="password" type="password" />
                        </div>
                        {/* <div className={styles.form_group}>
                            <label name="confirm-password">Confirmar Senha:</label>
                            <input ref={PassConfirmInputRef} required="" className={styles.form_control} name="confirm-password" id="confirm-password" type="password" />
                        </div> */}
                        <input onClick={notify} type="submit" className={styles.btn} value="registrar" />
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SignOn;