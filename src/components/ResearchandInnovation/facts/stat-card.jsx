import styles from './stat-card.module.css'

export function StatCard({ number, description, isLast }) {
  return (
    <div className={`${styles.card} ${!isLast ? styles.borderRight : ''}`}>
      <h2 className={styles.number}>{number}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

