import type { JsonProps } from '../../shared/shared'
import List from '../list'
import styles from './Section.module.css'

const Section = ({data} : JsonProps) => {
    return (
        <main>
            <section className={styles.container}>
                <div>
                    <List itens={data.itens}/>
                </div>
            </section>
        </main>
    )
}

export default Section