import { NavLink } from 'react-router'
import styles from './MenuLocation.module.css'

interface MenuLocationProps {
    navigate: string,
    title: string
}

const MenuLocation = (props: MenuLocationProps) => {

    return (
        <NavLink 
            to={props.navigate}
            className={({isActive}) => isActive ? styles.located : styles.link}
            end
        >
            <p className={styles.title}>{props.title}</p>
        </NavLink>
        )
}

export default MenuLocation