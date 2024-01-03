import rocket from '../assets/rocket.png'
import styles from './Header.module.css'
export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocket} alt="foguete"/>
            <div className={styles.headerName}>
                <span className={styles.to}>to</span>
                <span className={styles.do}>do</span>
            </div>
        </header>
    )
}