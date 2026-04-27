import { profile } from '../data/data'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>gc<span>.</span></span>
        <span className={styles.copy}>© 2025 {profile.name} · {profile.location}</span>
        <div className={styles.socials}>
          <a href={profile.socials.github}    target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.socials.linkedin}  target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
