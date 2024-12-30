import styles from './research-facts.module.css'
import { StatCard } from './stat-card'

export default function ResearchFacts() {
  const facts = [
    {
      number: '195',
      description: 'research centers & institutes'
    },
    {
      number: '$1.37B',
      description: '2024 research budget'
    },
    {
      number: '5,000+',
      description: 'research faculty'
    }
  ]

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Research Facts</h1>
      <div className={styles.statsContainer}>
        {facts.map((fact, index) => (
          <StatCard 
            key={index}
            number={fact.number}
            description={fact.description}
            isLast={index === facts.length - 1}
          />
        ))}
      </div>
    </section>
  )
}

