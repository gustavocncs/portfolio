import { projects } from '../data/data'
import { useInView } from '../hooks/useInView'
import { GithubIcon, ExternalIcon } from './Icons'
import styles from './Projetos.module.css'

export default function Projetos() {
  const [ref, inView] = useInView()

  return (
    <section className={styles.projetos} id="projetos" ref={ref}>
      <div className={styles.container}>
        <div className={styles.label}>03 — projetos</div>
        <h2 className={styles.title}>Meus <span>Projetos</span></h2>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div
              key={p.name}
              className={`${styles.card} ${inView ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={styles.cardTop}>
                <div className={styles.icon} style={{ background: p.bg }}>{p.emoji}</div>
                <div className={styles.cardLinks}>
                  <a href={p.github} target="_blank" rel="noreferrer" title="Ver código">
                    <GithubIcon size={18} />
                  </a>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" title="Ver demo">
                      <ExternalIcon size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.tags}>
                {p.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
