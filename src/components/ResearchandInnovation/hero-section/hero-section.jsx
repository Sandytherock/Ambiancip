import ImageSection from '../image-section/image-section'
import styles from './hero-section.module.css'
function HeroSection({ title, description }) {
  return (
    <div className={styles.heroSection}>
      <h1 className={styles.title}>
        {title.split(' & ').map((part, index) => (
          <span key={index}>
            {part}
            {index === 0 && title == "Research & Innovation" && <>&<br /></>}
          </span>
        ))}
      </h1>
      <div className={styles.separator} />
      <p className={styles.description}>{description}</p>
    </div>
  );

}

export default HeroSection