import styles from './Banner.module.css';
import bannerImage from '/Banner_Linkedin.jpg';
import myPhoto from '/foto_perfil_terno.jpg'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div
        className={styles.bannerContent}
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div>
          <h1 className={styles.title}>Idinaldo Tetéo</h1>
          <p className={styles.paragraph}>
            Specializing in C# and Java, with just over 6 years of experience building high-volume enterprise systems. 
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