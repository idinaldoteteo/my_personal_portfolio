import List from '../list'
import data from '../../../../db.json'
import styles from './Section.module.css'

const Section = () => {
    return (
        <main>
            <section className={styles.container}>
                <div>
                    <List itens={data.itens as Parameters<typeof List>[0]['itens']}/>
                </div>
            </section>
        </main>
    )
}

export default Section