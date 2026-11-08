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
          <p className={styles.paragraph}>Quisque tincidunt, quam quis interdum rutrum, velit diam gravida lectus, vitae lobortis eros enim in metus. Fusce vel nisi sit amet odio semper pulvinar. Aliquam non fringilla neque. Sed dapibus bibendum odio, viverra pretium nisi elementum a. Donec luctus, nibh in consequat iaculis, leo diam pulvinar ipsum, eget ornare ligula odio id tellus. Vestibulum eleifend ante et varius commodo. Duis a risus nec nibh consequat posuere non sed felis. Duis ultricies sollicitudin facilisis. Pellentesque auctor odio vel lorem consequat auctor. Aenean molestie risus ante, consequat porttitor magna vehicula in. In ante augue, eleifend eu justo sit amet, bibendum egestas tortor. Pellentesque dolor libero, aliquet sed lectus eget, pretium pharetra dolor. Aliquam vitae tempor est. Nullam ultrices blandit molestie. Donec non accumsan orci.</p>
        </div>
        <div>
          <img className={styles.myPhoto} src={myPhoto} alt="Photo Idinaldo" />
        </div>
      </div>
    </div>
  )
}

export default Banner