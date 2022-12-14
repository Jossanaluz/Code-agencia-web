import Logo from '../assets/logo.svg'
import styles from './Header.module.css'

export function Header() {

  return (
    <header className={styles.container}>
      <img src={Logo} alt="" />
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}