import type { JsonProps } from '../shared/shared';
import styles from './Banner.module.css';
import bannerImage from '/Banner_Linkedin.jpg';
import myPhoto from '/foto_perfil_terno.jpg'

const Banner = ({data}: JsonProps) => {

  return (
    <div className={styles.banner}>
      <div
        className={styles.bannerContent}
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className={styles.bannerContentText}>
          <h1 className={styles.title}>{data.personal.banner.title}</h1>
          <p className={styles.paragraph}>
            {data.personal.banner.subTitle}
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