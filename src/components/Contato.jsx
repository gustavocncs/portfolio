import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { profile } from '../data/data'
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons'
import styles from './Contato.module.css'

const SERVICE_ID  = 'service_mbda17g'
const TEMPLATE_ID = 'template_7sm305m'
const PUBLIC_KEY  = 'UygTGH_AFPzO-DMlt'

export default function Contato() {
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState(false)
  const [form, setForm]       = useState({ nome: '', email: '', mensagem: '' })

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(false)

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.nome,
          from_email: form.email,
          message: form.mensagem,
        },
        PUBLIC_KEY
      )
      setSent(true)
      setForm({ nome: '', email: '', mensagem: '' })
      setTimeout(() => setSent(false), 4000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setError(true)
      setTimeout(() => setError(false), 4000)
    } finally {
      setLoading(false)
    }
  }

  const socials = [
    { label: 'LinkedIn',  href: profile.socials.linkedin,  Icon: LinkedinIcon  },
    { label: 'GitHub',    href: profile.socials.github,    Icon: GithubIcon    },
    { label: 'Instagram', href: profile.socials.instagram, Icon: InstagramIcon },
  ]

  const btnLabel = () => {
    if (loading) return 'Enviando...'
    if (sent)    return '✓ Mensagem enviada!'
    if (error)   return '✗ Erro ao enviar. Tente novamente.'
    return 'Enviar mensagem →'
  }

  return (
    <section className={styles.contato} id="contato">
      <div className={styles.container}>
        <div className={styles.label}>04 — contato</div>
        <div className={styles.grid}>

          <div>
            <h2 className={styles.title}>Vamos <span>conversar?</span></h2>
            <p className={styles.desc}>
              Estou aberto a oportunidades de estágio, freelas e colaborações.
              Pode me mandar uma mensagem — responderei o mais rápido possível!
            </p>
            <div className={styles.links}>
              {socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className={styles.socialLink}>
                  <Icon size={20} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.group}>
              <label>Nome</label>
              <input
                name="nome"
                type="text"
                placeholder="Seu nome"
                value={form.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.group}>
              <label>E-mail</label>
              <input
                name="email"
                type="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.group}>
              <label>Mensagem</label>
              <textarea
                name="mensagem"
                rows={4}
                placeholder="Olá Gustavo, gostaria de..."
                value={form.mensagem}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading || sent}
              className={`${styles.btn} ${sent ? styles.sent : ''} ${error ? styles.error : ''}`}
            >
              {btnLabel()}
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}

