
import styles from './breadcrum.module.css'

function Breadcrumb({ items }) {
  return (
    <nav className={styles.breadcrumb}>
      {items.map((item, index) => (
        <div key={item.href} className={styles.item}>
          <a href={item.href} className={styles.link}>
            {item.label}
          </a>
          {index < items.length - 1 && <span className={styles.separator}>/</span>}
        </div>
      ))}
    </nav>
  );
}

export default Breadcrumb

