import styles from './components.module.css';

const isLogued = false;

const HeaderNav = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.agaum}>Kd meu busão</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/about">Sobre</a>
                    </li>
                    {
                        isLogued
                            ? <li><a href="/profile">Profile</a></li>
                            : ""
                    }
                    <li>
                        {
                            isLogued
                                ? < a href="/login">Logout</a>
                                : < a href="/login">Login</a>
                        }
                    </li>
                    {
                        isLogued
                            ? ""
                            : <li><a href="/signon">Registrar</a></li>
                    }
                </ul>
            </nav>
        </header >
    )
}

export default HeaderNav;