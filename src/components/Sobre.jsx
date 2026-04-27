import { profile, stats } from '../data/data'
import { useInView } from '../hooks/useInView'
import styles from './Sobre.module.css'

export default function Sobre() {
  const [ref, inView] = useInView()

  return (
    <section className={styles.sobre} id="sobre" ref={ref}>
      <div className={styles.container}>
        <div className={styles.label}>01 — sobre mim</div>
        <div className={styles.grid}>
          <div className={`${styles.text} ${inView ? styles.visible : ''}`}>
            <h2 className={styles.title}>Quem sou <span>eu?</span></h2>
            {profile.about.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className={styles.btn}
            >
              Ver GitHub →
            </a>
          </div>

          <div className={`${styles.stats} ${inView ? styles.visible : ''}`}>
            {stats.map((s, i) => (
              <div
                key={i}
                className={`${styles.statCard} ${s.highlight ? styles.highlight : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
