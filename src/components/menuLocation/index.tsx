import { Link, useLocation } from 'react-router'
import styles from './MenuLocation.module.css'

interface MenuLocationProps {
    navigate: string,
    title: string
}

const MenuLocation = (props: MenuLocationProps) => {

    const actualLocalion = useLocation();
    
    return (
        <Link className={actualLocalion.pathname === props.navigate ? styles.located : styles.link} to={props.navigate} >
            {props.title}
        </Link>
    )
}

export default MenuLocation