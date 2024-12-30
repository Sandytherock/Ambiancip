import styles from './image-section.module.css'

function ImageSection({ src, alt }) {
  return (
    <div className={styles.imageContainer}>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
}

export default ImageSection