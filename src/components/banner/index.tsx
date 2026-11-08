import styles from './Banner.module.css';
import bannerImage from '../../assets/Banner Linkedin.jpg';
import myPhoto from '../../assets/foto perfil terno 2.jpg'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div
        className={styles.bannerContent}
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div>
          <h1 className={styles.title}>Hi</h1>
          <p className={styles.paragraph}>
            Idinaldo Tetéo. 
          </p>
          <p className={styles.paragraph}>
            Software Engineer. 
          </p>
        </div>
        <div>
          <img className={styles.myPhoto} src={myPhoto} alt="Photo Idinaldo" />
        </div>
      </div>
    </div>
  )
}

export default Banner