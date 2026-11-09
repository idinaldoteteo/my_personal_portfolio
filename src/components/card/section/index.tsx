import List from '../list'
import styles from './Section.module.css'

const Section = ({data} : any) => {
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