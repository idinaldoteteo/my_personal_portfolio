import type React from 'react';
import styles from './Article.module.css'

interface ArticleProps extends React.HTMLAttributes<HTMLElement>  {
    urlCover: string;
    title: string;
}

const Article = ({children, urlCover, title} : ArticleProps) => {
  return (
    <section className={styles.container}>
        <div className={styles.cover} style={{background:`url(${urlCover})`}}/>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.content}>{children}</div>
    </section>
  )
}

export default Article