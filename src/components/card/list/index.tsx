import type { CardContainer } from "../../shared/shared";
import Card from "../card";
import styles from './List.module.css'

interface CardInfoProps {
    itens: CardContainer[];
}

const List = ({ itens }: CardInfoProps) => {

    return (
        <ul className={styles.list}>
            {
                itens.map((item) => (
                    <Card key={item.id} {...item} />
                ))
            }
        </ul>
    )
}

export default List