
import type { CardContainer } from '../../shared/shared';
import Stack from '../../stack';
import styles from './Card.module.css'

const Card = (card : CardContainer) => {
  return (
     <li className={styles.card}>
            <img src={card.src} alt={card.alt} />
            <div className={styles.content}>
                <h3>{card.title}</h3>
                <div className={styles.information}>
                    <div className={styles.dividerFirst}>
                        <Stack value={card.stack} />
                    </div>
                    <div className={styles.dividerSecond}>
                        <p className={styles.paragraph}>{card.description}</p>
                    </div>
                </div>
            </div>
        </li>
  )
}

export default Card