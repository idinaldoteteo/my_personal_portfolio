import styles from './Post.module.css'
import { useLocation } from 'react-router';
import Stack from '../stack';
import ReactMarkdown from 'react-markdown';
import '../../App.css'

const Post = () => {
  const { state } = useLocation();

  return (
    <section className={styles.container}>
        <div className={styles.cover} style={{backgroundImage:`url(/${state.src})`}}/>
        <h2 className={styles.title}>{state.title}</h2>
        <div className={styles.containerContent}>
          <div className={styles.containerContentText}>
            <Stack value={state.stack} />
            <span className='post-markdown-container'>
              <ReactMarkdown>
                {state.description}
              </ReactMarkdown>
            </span>
          </div>
          <div className={styles.containerContentImg}>
            <img src={`/${state.src}`}  />
          </div>
        </div>
    </section>
  )
}

export default Post