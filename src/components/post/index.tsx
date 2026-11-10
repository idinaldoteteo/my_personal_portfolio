import styles from './Post.module.css'
import { useLocation } from 'react-router';
import Stack from '../stack';
import ReactMarkdown from 'react-markdown';
import '../../App.css'
import banner from '../../assets/Banner Linkedin.jpg'
import Button from '../button';
import { FaGithub } from 'react-icons/fa';

const Post = () => {
  const { state } = useLocation();

  return (
    <section className={styles.container}>
      <div className={styles.cover} style={{ backgroundImage: `url(${banner})` }} />
      <div className={styles.title}>
        <h2>{state.title}</h2>
        <Button variant='icon'>
          <a
            href={state.gitUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> Go to repository
          </a>
        </Button>
      </div>
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
          <img src={`/${state.src}`} />
        </div>
      </div>
    </section>
  )
}

export default Post