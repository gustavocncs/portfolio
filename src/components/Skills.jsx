import { hardSkills, softSkills } from '../data/data'
import { useInView } from '../hooks/useInView'
import styles from './Skills.module.css'

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section className={styles.skills} id="skills" ref={ref}>
      <div className={styles.container}>
        <div className={styles.label}>02 — habilidades</div>

        <h2 className={styles.title}>Hard <span>Skills</span></h2>
        <div className={styles.hardGrid}>
          {hardSkills.map((skill, i) => (
            <div
              key={skill.name}
              className={`${styles.skillCard} ${inView ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className={styles.icon}
                style={{ background: skill.bg, color: skill.color }}
              >
                <span>{skill.name.slice(0, 2)}</span>
              </div>
              <div className={styles.skillName}>{skill.name}</div>
            </div>
          ))}
        </div>

        <h2 className={styles.title} style={{ marginTop: 64 }}>Soft <span>Skills</span></h2>
        <div className={styles.softGrid}>
          {softSkills.map((s, i) => (
            <div
              key={s.name}
              className={`${styles.softCard} ${inView ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={styles.softIcon}>{s.icon}</div>
              <div className={styles.softName}>{s.name}</div>
              <p className={styles.softDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
