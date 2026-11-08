import { Link } from "react-router"
import styles from './Menu.module.css'
import MenuLocation from "../menuLocation"

const Menu = () => {
    return (
        <section>
            <div className={styles.navegation}>
                <MenuLocation navigate="/" title="Home" />
                <MenuLocation navigate="/about" title="About me" />
            </div>
        </section>
    )
}

export default Menu