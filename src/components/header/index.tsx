import styles from './Header.module.css'
import MenuLocation from "../menuLocation"

const Header = () => {
    return (
        <section id="page-header">
            <div className={styles.navegation}>
                <MenuLocation navigate="/" title="Home" />
                <MenuLocation navigate="/about" title="About me" />
            </div>
        </section>
    )
}

export default Header