import styles from './components.module.css';

const HeaderNav = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.agaum}>Kd meu busão</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">Sobre</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                    <li>
                        <a href="/signon">Registrar</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNav;