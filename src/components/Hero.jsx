import { profile } from '../data/data'
import styles from './Hero.module.css'
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>


        <h1 className={styles.name}>
          {profile.name.split(' ')[0]}<br />
          <span>{profile.name.split(' ')[1]}.</span>
        </h1>

        <p className={styles.role}>
          Desenvolvedor <strong>Frontend</strong> · {profile.location}
        </p>

        <p className={styles.desc}>
          Estudante de Engenharia de Software apaixonado por criar interfaces
          que unem estética e performance. Sempre em busca de novos desafios.
        </p>

        <div className={styles.actions}>
          <a href="#projetos" className={styles.btnPrimary}>Ver projetos</a>
          <a href="#contato" className={styles.btnGhost}>Fale comigo</a>
        </div>

        <div className={styles.socials}>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" title="GitHub">
            <GithubIcon size={20} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
            <LinkedinIcon size={20} />
          </a>
          <a href={profile.socials.instagram} target="_blank" rel="noreferrer" title="Instagram">
            <InstagramIcon size={20} />
          </a>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <div className={styles.avatar}>{profile.initials}</div>
            <div>
              <div className={styles.cardName}>{profile.name}</div>
              <div className={styles.cardRole}>{profile.role}</div>
            </div>
          </div>
          <div className={styles.code}>
            <div><span className={styles.kw}>const</span> <span className={styles.var}>dev</span> <span className={styles.op}>=</span> {'{'}</div>
            <div className={styles.pad}>nome: <span className={styles.str}>"Gustavo"</span>,</div>
            <div className={styles.pad}>foco: <span className={styles.str}>"Frontend"</span>,</div>
            <div className={styles.pad}>stack: [<span className={styles.str}>"React"</span>, <span className={styles.str}>"TS"</span>],</div>
            <div className={styles.pad}>café: <span className={styles.bool}>true</span>,</div>
            <div>{'}'}</div>
          </div>
          <div className={styles.tags}>
            {['HTML', 'CSS', 'React', 'TS'].map(t => <span key={t}>{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
